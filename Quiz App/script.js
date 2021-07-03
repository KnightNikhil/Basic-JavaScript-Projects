ques_list =[
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
]

ids = {
    'ques' : document.getElementById('ques'),
    'opt_a': document.getElementById('label_a'),
    'opt_b': document.getElementById('label_b'),
    'opt_c': document.getElementById('label_c'),
    'opt_d': document.getElementById('label_d'),
    'submit': document.getElementById('submit'),
    'next' : document.getElementById('next'),
    'clear' : document.getElementById('clear')
}

btn_cond = {
    'submit':true, 
    'next' : true
}

res = ["CORRECT ANSWER", "INCORRECT ANSWER", "Question mandatory to attempt!"]

score = 0
i=0

ids['submit'].addEventListener("click", correctness)
ids['next'].addEventListener("click", next_ques)
ids['clear'].addEventListener("click", deselect_opts)

change_ques()

function next_ques(){
    if (i===(ques_list.length-1)){
        console.log("END")
        document.getElementById("quiz-container").remove()
        msg = document.createElement('h1')
        msg.setAttribute('id', 'ques')
        msg.textContent = `Your Score is ${score} / ${ques_list.length}`
        document.getElementById("res-box").appendChild(msg)

    }
    else{

        i+=1
        change_ques()
        deselect_opts()
        btn_cond['submit']= true
        document.getElementById('res_msg').remove()
             
    }
    
    
}

function print_res(n){
    msg = document.createElement('h5')
    msg.setAttribute('id', 'res_msg')
    msg.textContent = res[n]
    document.getElementById("quiz-container").appendChild(msg)

}

function correctness(){
    if (btn_cond['submit']===true){
        if((document.getElementById(`opt_${ques_list[i]['correct']}`).checked) ){ 
            score+=1
            print_res(0)
        }
        else{
            print_res(1)
        }
    }
}

function deselect_opts(){
    ch = ['a','b','c','d']
    for (let i=0;i<ch.length;i++){
        document.getElementById(`opt_${ch[i]}`).checked = false
    }
    document.getElementById('res_msg').remove()

}

function change_ques(){    
    ids['ques'].textContent = ques_list[i]['question']
    ids['opt_a'].textContent = ques_list[i]['a']
    ids['opt_b'].textContent = ques_list[i]['b']
    ids['opt_c'].textContent = ques_list[i]['c']
    ids['opt_d'].textContent = ques_list[i]['d']
}


