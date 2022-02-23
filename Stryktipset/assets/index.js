import { getMatches } from './fetchMatches.js';


window.addEventListener('load', (event) => {
    quoteButtonIsTrue();
  });
function quoteButtonIsTrue() {
    getMatches().then(createAndInsertParagraphElement);

}


function createAndInsertParagraphElement(data) {     
        
        data.forEach(function (element) {
            let output = '';
            
            output += `
          <tr>
            <td>${element.matchNumber}</td>
            <td><a href=${element.teams[1].homepage}>${element.teams[1].name}</a> vs <a href=${element.teams[2].homepage}>${element.teams[2].name}</a></td>

            <td>${element.matchInfo.outcome == ['2']? '<span class="checkmark"><div class="stem"></div><div class="kick"></div></span>':""}</td>

            <td>${element.matchInfo.outcome == ['X']? '<span class="checkmark"><div class="stem"></div><div class="kick"></div></span>':""}</td>
            
            <td>${element.matchInfo.outcome == ['2']? '<span class="checkmark"><div class="stem"></div><div class="kick"></div></span>':""}</td>
            
          `;
            document.getElementById('table').innerHTML += output;

        });

    
    }

