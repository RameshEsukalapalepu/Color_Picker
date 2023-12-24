            let colorPickerContainerElement = document.getElementById("colorPickerContainer");
            let selectedColorElement = document.getElementById("selectedColor");
            function changeBgToGreyAndUpdateText(){
                colorPickerContainerElement.style.backgroundColor="#e0e0e0";
                selectedColorElement.textContent = "#e0e0e0";
            }
            
            function changeBgToGreenAndUpdateText(){
                colorPickerContainerElement.style.backgroundColor="#6fcf97";
                selectedColorElement.textContent = "#6fcf97"
            }
            
            function chageBgToBlueAndUpdateText(){
                colorPickerContainerElement.style.backgroundColor ="#e0e0e0";
                selectedColorElement.textContent = "#56ccf2";
            }
            
            function changeBgToPurpleAndUpdateText(){
                colorPickerContainerElement.style.backgroundColor = "#bb6bd9";
                selectedColorElement.textContent ="#bb6bd9";
            }
