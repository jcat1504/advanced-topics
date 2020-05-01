//referential transparency: how predictable the output is, given a certain input

function a(num){ 
    return num * 2
} //because it doubles the input

//idempotence: a function that gives the same output and can have side effects. it is about being able to run the function multiple times, including
//inside of itself and result must always be the same

function a(num) {
    return num - num
}//would always result in 0

//pure function gives same output with no side effects