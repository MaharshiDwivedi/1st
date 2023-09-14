let outputScreen = document.getElementById("outputscrn");

        function display(num) {
            outputScreen.value += num;
        }
        function Calculate() {
            try {
                outputScreen.value = eval(outputScreen.value)
            }
            catch(err)
            {
                alert('You Kidding bruh !!');
            }

            }
        

        function Clear(){
            outputScreen.value=" ";
        }
        function del(){
            outputScreen.value = outputScreen.value.slice(0,-1);
            
        }

        