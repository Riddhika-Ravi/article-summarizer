const article = document.getElementById("article");

const wordCount = document.getElementById("wordCount");

const button = document.getElementById("summarizeBtn");

const tldr = document.getElementById("tldr");

const bullets = document.getElementById("bullets");

const facts = document.getElementById("facts");

const sentiment = document.getElementById("sentiment");

const loading = document.getElementById("loading");

const copyBtn = document.getElementById("copyBtn");



// Word Count

article.addEventListener("input", () => {

    let words = article.value

        .trim()

        .split(/\s+/)

        .filter(Boolean);


    wordCount.innerText =

        "Word Count : " + words.length;

});



// Summarize Button

button.addEventListener("click", summarize);




async function summarize() {

    const text = article.value;


    const words = text

        .trim()

        .split(/\s+/)

        .filter(Boolean);



    if (words.length < 100) {

        alert(

            "Please paste at least 100 words."

        );

        return;

    }



    loading.innerText =

        "Summarizing...";



    button.disabled = true;



    const length =

        document.getElementById("length").value;



    const bulletCount =

        length === "short"

        ? 3

        : 5;




    const prompt = `

You are a professional article summarizer.

Return ONLY valid JSON.

DO NOT add markdown.

DO NOT use \`\`\`json.

Return exactly this format:

{

"tldr":"",

"bullets":[],

"key_facts":[],

"sentiment":""

}



Rules:

- TLDR should be one sentence.

- Return ${bulletCount} bullet points.

- Return up to 3 key facts.

- Sentiment must be:

positive

or

negative

or

neutral.

Article:


${text}

`;


    const API_KEY = "AQ.Ab8RN6I2mZY5kvBtkf5ZQ3Tm_wLOmQXpdQD2eWv970YELbiRow"

    const url =`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

    try {



        const response =

        await fetch(

            url,

            {

                method: "POST",



                headers: {

                    "Content-Type":

                    "application/json"

                },



                body: JSON.stringify({

                    contents: [

                        {

                            parts: [

                                {

                                    text: prompt

                                }

                            ]

                        }

                    ]

                })

            }

        );



        const data =

        await response.json();



        console.log(data);




        if (!data.candidates) {



            alert(

                "Gemini API Error"

            );



            console.log(data);



            return;

        }




        let output =

        data

        .candidates[0]

        .content

        .parts[0]

        .text;




        output = output

        .replace(/```json/g, "")

        .replace(/```/g, "")

        .trim();




        const result =

        JSON.parse(output);



        display(result);



    }



    catch (error) {



        console.log(error);



        alert(

            "Summarization failed."

        );



    }



    finally {



        loading.innerText = "";



        button.disabled = false;



    }



}







function display(result) {



    tldr.innerText =

    result.tldr;




    bullets.innerHTML = "";



    result.bullets.forEach(

        point => {



            let li =

            document.createElement("li");



            li.innerText = point;



            bullets.appendChild(li);



        }

    );




    facts.innerHTML = "";



    result.key_facts.forEach(

        fact => {



            let div =

            document.createElement("div");



            div.className = "fact";



            div.innerText = fact;



            facts.appendChild(div);



        }

    );




    sentiment.className = "";



 sentiment.innerText =

result.sentiment

.charAt(0)

.toUpperCase()

+

result.sentiment

.slice(1);




    sentiment.classList.add(

        result.sentiment

        .toLowerCase()

    );



}







copyBtn.addEventListener(

    "click",

    () => {



        let text =

        "TLDR:\n"



        + tldr.innerText



        + "\n\nBullet Points:\n";




        document

        .querySelectorAll(

            "#bullets li"

        )



        .forEach(

            li => {



                text +=

                "• "

                + li.innerText

                + "\n";



            }

        );




        text +=

        "\nKey Facts:\n";



        document

        .querySelectorAll(

            ".fact"

        )



        .forEach(

            fact => {



                text +=

                "• "

                + fact.innerText

                + "\n";



            }

        );




        text +=



        "\nSentiment : "



        + sentiment.innerText;




        navigator

        .clipboard

        .writeText(text);




        copyBtn.innerText =

        "Copied!";




        setTimeout(

            () => {



                copyBtn.innerText =

                "Copy Summary";



            },

            2000

        );



    }

);
