"use client";


import {useEffect,useState} from "react";



export default function Results(){



const [candidates,setCandidates]=useState<any[]>([]);



useEffect(()=>{


const data = JSON.parse(

localStorage.getItem("candidates") || "[]"

);


setCandidates(data);



},[]);







return(


<main className="resultPage">



<header className="resultHeader">


<h2>

✦ NEXHIRE OS

</h2>



<span>

AI MATCH RESULTS

</span>



</header>









<section className="summary">


<h1>

Top AI Ranked Candidates

</h1>



<p>

AI semantic search completed

</p>



<div className="searchInfo">


{candidates.length}

 Candidates Found


</div>



</section>







<div className="cards">



{

candidates.map((c,index)=>(



<div

className={

index===0 ?

"candidateCard winner"

:

"candidateCard"

}


key={c.candidate_id}


>




{

index===0 &&

<div className="badge">

🏆 TOP AI MATCH

</div>

}






<div className="rank">

#{index+1} Ranked Candidate

</div>






<div className="top">



<div>


<h2>

{c.candidate_id}

</h2>



<p>

{c.current_title}

</p>



</div>






<div className="score">


{Math.round(c.ai_score*100)}%


<span>

MATCH

</span>


</div>




</div>









<h3>

Candidate Details

</h3>


<p>

Experience:

{c.years_experience} years

</p>


<p>

Location:

{c.location}

</p>


<p>

Notice:

{c.notice_period} days

</p>








<div className="reason">


<h3>

🤖 WHY NEX AI SELECTED

</h3>



<p>

✓ Semantic similarity matched

</p>


<p>

✓ Relevant AI skills detected

</p>


<p>

✓ Experience analyzed

</p>




</div>







<button

className="profileBtn"

onClick={()=>{

localStorage.setItem(

"selectedCandidate",

JSON.stringify(c)

);


window.location.href="/candidate";


}}


>

View Candidate Intelligence

</button>






</div>



))


}





</div>






</main>



)



}