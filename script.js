//coletando data
var umaData, umaData2, ano, mes, d;

ano = parseInt(window.prompt("Qual ano?"));
mes = parseInt(window.prompt("Qual mês?"));

umaData = new Date(ano, mes-1, 1);

umaData2 = new Date(ano, mes, 1);
umaData2.setDate(0);

//mes e ano
switch (mes - 1)
  {
    case 0: document.write("<p class='titulo'data-titulo>Janeiro " + ano); break; 
    case 1: document.write("<p class='titulo'data-titulo>Fevereiro " + ano); break; 
    case 2: document.write("<p class='titulo'data-titulo>Março " + ano); break; 
    case 3: document.write("<p class='titulo'data-titulo>Abril " + ano); break; 
    case 4: document.write("<p class='titulo'data-titulo>Maio " + ano); break; 
    case 5: document.write("<p class='titulo'data-titulo>Junho " + ano); break; 
    case 6: document.write("<p class='titulo'data-titulo>Julho " + ano); break; 
    case 7: document.write("<p class='titulo'data-titulo>Agosto " + ano); break; 
    case 8: document.write("<p class='titulo'data-titulo>Setembro " + ano); break; 
    case 9: document.write("<p class='titulo'data-titulo>Outubro " + ano); break; 
    case 10: document.write("<p class='titulo'data-titulo>Novembro " + ano); break; 
    case 11: document.write("<p class='titulo'data-titulo>Dezembro " + ano); break; 
    }
  
//formatacao por dia da semana 
document.write("</p>");
document.write("<table>");
document.write("<tr>");
document.write("<td> <p class='domt'data-dompt> Dom");
document.write("<td> <p class='diat'data-diat> Seg");
document.write("<td> <p class='diat'data-diat> Ter");
document.write("<td> <p class='diat'data-diat> Qua");
document.write("<td> <p class='diat'data-diat> Qui");
document.write("<td> <p class='diat'data-diat> Sex");
document.write("<td> <p class='sabt'data-sabt> Sáb");
document.write("<tr>");

switch (umaData.getDay())
{
case 0: document.write(""); break;
case 1: document.write("<td colspan=1>"); break;
case 2: document.write("<td colspan=2>"); break;
case 3: document.write("<td colspan=3>"); break;
case 4: document.write("<td colspan=4>"); break;
case 5: document.write("<td colspan=5>"); break;
case 6: document.write("<td colspan=6>"); break;
}

//funcao
for(d=2; d <= umaData2.getDate() + 1; ++d)
{
  if (umaData.getDay() == 0)
  {
   document.write("<tr>");
   document.write("<td>");
   document.write("<p class='dom'data-dom>" + umaData.getDate());
   document.write("</p>");
   document.write("</td>");

   umaData.setDate(d);
  }

  else if (umaData.getDay() == 6)
  {
   document.write("<td>");
   document.write("<p class='sab'data-sab>" + umaData.getDate());
   document.write("</p>");
   document.write("</td>");

   umaData.setDate(d);
  }

  else
  {
   document.write("<td>");
   document.write("<p class='dia'data-dia>" + umaData.getDate());
   document.write("</p>"); 
   document.write("</td>");

   umaData.setDate(d);
   }

}

document.write("</table>");
document.write("<br>");