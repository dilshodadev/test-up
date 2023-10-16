let questions=[
    {
        question: "Kartoshkadan taom adabiy tilda nima bo'ladi?",
        variants:["tuxumbarak","jarkob","delfinni panjasidan qaynatma", "tuxum"],
        correctAnswer: "jarkob",
    },

    {
        question: "dengiz nimasidan ovqat adabiy tilda nima bo'ladi?",
        variants:["tuxumbarak","jarkob","delfinni panjasidan qaynatma", "tuxum"],
        correctAnswer: "delfinni panjasidan qaynatma",
    },

    {
        question: "yumurtqa adabiy tilda nima bo'ladi?",
        variants:["tuxumbarak","jarkob","delfinni panjasidan qaynatma", "tuxum"],
        correctAnswer: "tuxum",
    },
];

     let stopApp=true;
     while(stopApp){
        let a = +prompt(
            "1. Test boshlash\n2.Testni tahrirlash\n3.Savollar ro'yxati\n0.Chiqish"
        );
        switch(a){
            case 1:
                startTest(questions);
                break;
            case 2:
                let password=prompt("Parolni kiriting: ", "adminadmin");
                if(password=="adminadmin") editTest(questions);
                break;
            case 3:
                alert("Savollar ro'yxati:\n"+getQuestionsList(questions));
                break;
            case 0:
               stopApp=false;
               break;
        }
     }

      function toVariant(arr){
        let newArr = arr.map((el,i)=>{
            return String.fromCharCode(65+i)+") " +el;
        });

        //for (let i=0; i<arr.length; i++){
        // arr[i] = String.fromCharCode(65+i) +")" +arr[i];
        // }

        return newArr;
        }
             function startTest(questions){
                let counter =0;
                for(let i=0; i<questions.length; i++){
                    let userAnswer = prompt(
                        i+
                          1+
                           ")"+
                           questions[i].question +
                           "\n"+
                           toVariant(questions[i].variants).join("\n")
                    );
                    let n=userAnswer.toLowerCase().charCodeAt(0)-97; //
                    //console.log(questions[i].variants.indexOf(questions[i].correctAnswer));

                    if(question[i].variants[n]==questions[i].correctAnswer){
                        counter++;
                    }
                }
                alert("Siz: " + counter + " ta savolga to'g'ri javob berdiongiz");
            
             }
              function getQuestionsList(questions){
                 let questionsList ="";
                 for(let i=0; i<questions.length; i++){
                    questionsList +=i+1+questions[i].question[i].question+"\n";
                 }
              return questionsList;
        }
        function editTest(questions){
         let questionsList=
          "Tahrirlamoqchi bo'lgan savolni raqamini kiriting:\n"+
            getQuestionsList(questions);

            let editIndex= +prompt(questionsList);
            questions[editIndex-1] = {
                questions:prompt("Savolni kiriting:", questions[editIndex-1].question),
                variants:[
                    prompt("a) variantni kiriting: ", questions[editIndex-1].variants[0]),
                    prompt("b) variantni kiriting: ", questions[editIndex-1].variants[1]),
                    prompt("c) variantni kiriting: ", questions[editIndex-1].variants[2]),
                    prompt("d) variantni kiriting: ", questions[editIndex-1].variants[3]),
                ],

                correctAnswer:prompt(
                    "To'g'ri javobni kiriting: ",
                    questions[editIndex-1].correctAnswer
                ),
            };
        alert(getQuestionsList(questions));
      }

      

