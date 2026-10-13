// Camada de dados: usa o Supabase se estiver configurado; senão, guarda neste aparelho (modo demonstração).
(function(){
const C=window.VOKTA,S=C.supabase,REMOTE=!!(S.url&&S.key),LS="vokta_ag_v1";
const H={apikey:S.key,Authorization:"Bearer "+S.key,"Content-Type":"application/json"};
const ler=()=>{try{return JSON.parse(localStorage.getItem(LS))||[]}catch(e){return[]}};
const grava=a=>{try{localStorage.setItem(LS,JSON.stringify(a))}catch(e){}};
window.V={remoto:REMOTE,
 brl:v=>v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),
 dk:d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"),
 horas(){const[a,b]=C.horario.inicio.split(":").map(Number),[c,d]=C.horario.fim.split(":").map(Number),o=[];
  for(let m=a*60+b;m<=c*60+d;m+=C.horario.passo)o.push(String(Math.floor(m/60)).padStart(2,"0")+":"+String(m%60).padStart(2,"0"));return o},
 async ocupados(barbeiro,data){
  if(REMOTE){const r=await fetch(S.url+"/rest/v1/rpc/horarios_ocupados",{method:"POST",headers:H,body:JSON.stringify({p_barbeiro:barbeiro,p_data:data})});
   if(!r.ok)throw new Error("rede");return(await r.json()).map(x=>String(x).slice(0,5))}
  return ler().filter(a=>a.barbeiro===barbeiro&&a.data===data&&a.status!=="cancelado").map(a=>a.hora)},
 async criar(a){
  const row={nome:a.nome,whatsapp:a.whatsapp,servicos:a.servicos,total:a.total,barbeiro:a.barbeiro,data:a.data,hora:a.hora,status:"agendado"};
  if(REMOTE){const r=await fetch(S.url+"/rest/v1/agendamentos",{method:"POST",headers:{...H,Prefer:"return=minimal"},body:JSON.stringify(row)});
   if(r.status===409)throw new Error("ocupado");if(!r.ok)throw new Error("erro");return}
  const l=ler();if(l.some(x=>x.barbeiro===row.barbeiro&&x.data===row.data&&x.hora===row.hora&&x.status!=="cancelado"))throw new Error("ocupado");
  row.id=Date.now();row.criado=new Date().toISOString();l.push(row);grava(l)}
};})();
