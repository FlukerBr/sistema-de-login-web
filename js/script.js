const txtsenha$ = document.getElementById('txtsenha')
const txtnome$ = document.getElementById('txtnome')
const imgtp$ = document.getElementById('imgtp')
const typepass$ = document.getElementById('typepass')
const btnlogin$ = document.getElementById('btnlogin')
const btnregister$ = document.getElementById('btnregister')
const res$ = document.getElementById('res')
typepass$.addEventListener('click', typep)
btnlogin$.addEventListener('click', login)
btnregister$.addEventListener('click', register)
function typep() {
    if (txtsenha$.type == 'password') {
        txtsenha$.type = 'text'
        imgtp$.src = 'typep1.svg'
    } else {
        txtsenha$.type = 'password'
        imgtp$.src = 'typep2.svg'
    }
}
function login() {
    if (txtnome$.value.length == 0 || txtsenha$.value.length == 0) {
    res$.innerHTML = 'Preencha antes de logar!'
    } else if (localStorage.getItem(txtnome$.value) == null) {
        res$.innerHTML = 'Usuário não existe!'
    } else if (localStorage.getItem(txtnome$.value) != txtsenha$.value) {
        res$.innerHTML = 'Senha incorreta!'
    } else if ((localStorage.getItem(txtnome$.value) == txtsenha$.value)) {
        res$.innerHTML = 'Logado com sucesso!'
    }
}
function register() {
    if (txtnome$.value.length == 0 || txtsenha$.value.length == 0) {
    res$.innerHTML = 'Preencha antes de registrar!'
    } else if (localStorage.getItem(txtnome$.value) != null) {
        res$.innerHTML = 'Usuário já existe!'
    } else {
        localStorage.setItem(txtnome$.value, txtsenha$.value)
        res$.innerHTML = 'Registrado com sucesso!'
    }
}