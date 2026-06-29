"use client";


import {useEffect,useState} from "react";
import jsPDF from "jspdf";



export default function CandidatePage(){



const [candidate,setCandidate]=useState<any>(null);




useEffect(()=>{


const data = JSON.parse(

localStorage.getItem("selectedCandidate") || "null"

);


setCandidate(data);



},[]);







if(!candidate){


return(

<main className="candidatePage">

<h2>

Loading Candidate Intelligence...

</h2>

</main>

)


}







const skills=[

"Python",
"FAISS",
"Machine Learning",
"NLP",
"LLM",
"AWS"

].filter(skill=>


candidate.master_text

?.toLowerCase()

.includes(skill.toLowerCase())

);








const analysis:string[] = [];



const profileText = 

candidate.master_text?.toLowerCase() || "";





if(profileText.includes("faiss")){

analysis.push(

"FAISS vector search experience found"

);

}



if(
profileText.includes("nlp") ||
profileText.includes("natural language")
){

analysis.push(

"NLP background matches AI requirement"

);

}



if(
profileText.includes("llm") ||
profileText.includes("rag")
){

analysis.push(

"LLM / RAG experience detected"

);

}



if(candidate.years_experience >=5){

analysis.push(

`${candidate.years_experience} years experience matches seniority requirement`

);

}



analysis.push(

`Semantic AI match score: ${Math.round(candidate.ai_score*100)}%`

);









const generateReport=()=>{


const pdf=new jsPDF();




pdf.setFontSize(20);


pdf.text(

"NEXHIRE OS AI Hiring Report",

20,

30

);





pdf.setFontSize(14);



pdf.text(

`Candidate: ${candidate.candidate_id}`,

20,

50

);




pdf.text(

`Role: ${candidate.current_title}`,

20,

65

);




pdf.text(

`AI Confidence: ${Math.round(candidate.ai_score*100)}%`,

20,

80

);




pdf.text(

`Experience: ${candidate.years_experience} Years`,

20,

95

);




pdf.text(

`Location: ${candidate.location}`,

20,

110

);





pdf.text(

`Notice Period: ${candidate.notice_period} days`,

20,

125

);






pdf.text(

"Detected Skills:",

20,

150

);





skills.forEach((skill,index)=>{


pdf.text(

`- ${skill}`,

25,

165+(index*10)

);


});






pdf.text(

"AI Analysis:",

20,

240

);





analysis.forEach((item,index)=>{


pdf.text(

`- ${item}`,

25,

255+(index*10)

);


});







pdf.save(

"AI_Hiring_Report.pdf"

);



};








return(



<main className="candidatePage">








<header className="candidateHeader">


<h2>

✦ NEXHIRE OS

</h2>



<span>

AI CANDIDATE INTELLIGENCE

</span>


</header>









<section className="profileHero">


<div>


<h1>

{candidate.candidate_id}

</h1>



<h3>

{candidate.current_title}

</h3>




<p>

🏆 AI Recommended Candidate

</p>



<p>

AI matched this profile using semantic search,
skills and experience analysis.

</p>



</div>






<div className="confidence">


{Math.round(candidate.ai_score*100)}%


<span>

AI Confidence

</span>



</div>



</section>









<section className="grid">






<div className="infoCard">


<h2>

Experience

</h2>


<h3>

{candidate.years_experience} Years

</h3>


<p>

Professional Experience

</p>


</div>







<div className="infoCard">


<h2>

Location

</h2>


<h3>

📍 {candidate.location}

</h3>


<p>

Notice:

{candidate.notice_period} days

</p>



</div>








<div className="infoCard">


<h2>

AI Recommendation

</h2>


<p>

🔥 Recommended for Technical Screening

</p>


</div>





</section>









<section className="infoCard">


<h2>

Detected Skills

</h2>



<div className="skills">


{

skills.map(skill=>(


<span key={skill}>

{skill}

</span>


))

}



</div>



</section>









<section className="decision">


<h2>

🤖 AI DECISION TRACE
</h2>




{

analysis.map(item=>(


<p key={item}>

✓ {item}

</p>


))


}



</section>









<section className="graph">


<h2>

Skill Intelligence Graph

</h2>



<div className="nodes">



<div className="node main">

AI

</div>





{

skills.map(skill=>(


<div

className="node"

key={skill}

>

{skill}

</div>


))


}




</div>



</section>









<button

className="shortlist"

onClick={()=>alert("Candidate shortlisted")}

>

✓ SHORTLIST CANDIDATE

</button>








<button

className="export"

onClick={generateReport}

>

⬇ Generate AI Hiring Report

</button>








</main>


)


}