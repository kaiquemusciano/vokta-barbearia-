// ====== CONFIGURAÇÃO DA VOKTA BARBEARIA (edite aqui) ======
window.VOKTA={
 nome:"VOKTA Barbearia",
 whatsapp:"",      // WhatsApp da barbearia: 55 + DDD + número. Ex.: 5513999999999
 endereco:"",      // Ex.: Rua Tal, 123 - Bairro, Cidade
 servicos:[        // preço em reais; "min" é opcional (só aparece se preenchido)
  {id:"corte",nome:"Corte",preco:45,min:45},
  {id:"barba",nome:"Barba",preco:45,min:30},
  {id:"corte-barba",nome:"Corte e Barba",preco:90},
  {id:"corte-barba-sobr",nome:"Corte, Barba e Sobrancelha",preco:105},
  {id:"corte-sobr-cav",nome:"Corte, Sobrancelha e Cavanhaque",preco:80},
  {id:"corte-sobr",nome:"Corte e Sobrancelha",preco:60},
  {id:"botox",nome:"Botox",preco:45},
  {id:"sobrancelha",nome:"Sobrancelha",preco:15}
 ],
 barbeiros:[{id:"jhonatan",nome:"Jhonatan Musciano"},{id:"alan",nome:"Alan Barbosa"}],
 horario:{inicio:"08:00",fim:"18:30",passo:45,dias:[1,2,3,4,5,6]}, // dias: 0=dom ... 6=sáb
 antecedenciaMin:30, diasAFrente:14,
 supabase:{url:"",key:""}   // preencha na etapa do banco de dados
};
