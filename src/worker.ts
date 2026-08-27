interface AssetBinding { fetch(request: Request): Promise<Response>; }
interface Env { ASSETS: AssetBinding; LEAD_WEBHOOK_URL?: string; }
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname !== '/api/contact') return env.ASSETS.fetch(request);
    if (request.method !== 'POST') return Response.json({ ok:false, error:'method_not_allowed' },{ status:405 });
    const form = await request.formData();
    if (form.get('website')) return Response.json({ ok:true });
    if (!form.get('name') || !form.get('email') || !form.get('phone') || !form.get('privacy')) return Response.json({ ok:false, error:'validation_failed' },{ status:400 });
    if (!env.LEAD_WEBHOOK_URL) return Response.json({ ok:false, error:'lead_destination_not_configured' },{ status:503 });
    const lead = Object.fromEntries([...form.entries()].map(([key,value])=>[key,String(value)]));
    const response = await fetch(env.LEAD_WEBHOOK_URL,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(lead)});
    if (!response.ok) return Response.json({ ok:false, error:'destination_failed' },{ status:502 });
    return Response.json({ ok:true });
  },
};
