 
document.addEventListener('DOMContentLoaded', function() {
    var output = "DOM is ready"
    document.getElementById('logSection').innerHTML += output
    console.log("output: " + output);
}, false);

function main() {
    const log = document.querySelector(".event-log-contents");
    const reload = document.querySelector("#reload");
    const tester = document.querySelector("#tester");
    
    reload.addEventListener("click", () => {
      log.textContent = "";
      setTimeout(() => {
        window.location.reload(true);
      }, 200);
    });
    
    window.addEventListener("load", (event) => {
      log.textContent += "load\n";
    });
    
    document.addEventListener("readystatechange", (event) => {
      log.textContent += `readystate: ${document.readyState}\n`;
    });
    
    document.addEventListener("DOMContentLoaded", (event) => {
      log.textContent += "DOMContentLoaded\n";
    });

    // Display the log window if needed
//if(GetURLParameter('show_log_window')==1){
    
        //document.getElementById('growthxp_log').style.display="block";   
        document.querySelector("#copylog").addEventListener("click", copyLogToClipboard);
        
    
 
        
};//main

function copyLogToClipboard() {
    //var copyText = document.querySelector("#growthxp_log_text");
    //copyText.select();
    //selectText('growthxp_log_text')
  
    // Cible de l'Ã©lÃ©ment qui doit Ãªtre copiÃ©
    var fromElement = document.querySelector("#mp_log_text");
    if(!fromElement) return;
  
    // SÃ©lection des caractÃ¨res concernÃ©s
    var range = document.createRange();
    var selection = window.getSelection();
    range.selectNode(fromElement);
    selection.removeAllRanges();
    selection.addRange(range);
  
    try {
        // ExÃ©cution de la commande de copie
        var result = document.execCommand('copy');
        /*if (result) {
            // La copie a rÃ©ussi
            console.log('CopiÃ© !');
        }*/
    }
    catch(err) {
        // Une erreur est surevnue lors de la tentative de copie
        console.log(err);
    }
  
    // Fin de l'opÃ©ration
    selection = window.getSelection();
    if (typeof selection.removeRange === 'function') {
        selection.removeRange(range);
    } else if (typeof selection.removeAllRanges === 'function') {
        selection.removeAllRanges();
    }
  
    //document.execCommand("copy");
  }