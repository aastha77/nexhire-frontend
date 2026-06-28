"use client";

import { useState } from "react";


export default function Home(){


const [dark,setDark] = useState(true);

const [job,setJob] = useState("");

const [loading,setLoading] = useState(false);



async function startSearch(){


if(!job.trim()) return;


setLoading(true);



try{


const response = await fetch(

"https://nexhire-ai-backend.onrender.com/search",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

description:job

})

}

);



const data = await response.json();



localStorage.setItem(

"candidates",

JSON.stringify(data.candidates)

);



window.location.href="/results";



}

catch(error){

console.log(error);

}


finally{

setLoading(false);

}



}





return(


<main className={dark ? "app dark":"app"}>



<header className="header">


<div className="logo">

✦ NEXHIRE OS

</div>



<nav>

<span>
Dashboard
</span>


<span>
Candidates
</span>


<span>
AI Search
</span>


</nav>



<button

className="theme"

onClick={()=>setDark(!dark)}

>

{

dark ?

"☀ Light"

:

"◐ AI Dark"

}


</button>




<div className="online">

● AI CORE ONLINE

</div>



</header>







<section className="layout">





<div className="panel left">



<h1>

🧠

<br/>

DESCRIBE YOUR

<br/>

IDEAL CANDIDATE

</h1>





<textarea


value={job}


onChange={(e)=>setJob(e.target.value)}



placeholder="

Example:

Senior Python engineer with FAISS,

Django, AWS and AI experience

"



/>







<div className="upload">


⬆


<p>

Drop Resume Files

<br/>

PDF • DOCX

</p>


</div>








<button


className="searchBtn"


onClick={startSearch}


>


{


loading ?

"🤖 AI ANALYZING..."

:

"✨ INITIATE AI MATCHING"


}



</button>





</div>









<div className="panel center">



<div className="circle">

◉

</div>



<div className="core">


<h2>

NEX AI CORE

</h2>


<p>

SEMANTIC ENGINE ONLINE

</p>


</div>





<div className="engine">


✓ Embedding Model

<br/>

✓ Semantic Search

<br/>

✓ Ranking Engine



</div>





<div className="network">


100,000+ CANDIDATE VECTOR SPACE


</div>



</div>









<div className="panel ai">


<h2>

🤖 Nex AI Assistant

</h2>



<p>

Your AI hiring copilot

</p>





<div className="chat">


"I can help you create JD,

find skills and explain

candidate matches."


</div>




<div className="status">


STATUS: READY


</div>


</div>






</section>







<section className="stats">


<div>

<h2>

100K+

</h2>


<p>

Candidates Indexed

</p>


</div>



<div>

<h2>

98%

</h2>


<p>

Match Accuracy

</p>


</div>




<div>

<h2>

0.8s

</h2>


<p>

Ranking Speed

</p>


</div>



</section>




</main>



)

}