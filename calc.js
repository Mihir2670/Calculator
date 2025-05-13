var flag = true;
var input_val = document.getElementById('inputVal');
var sub_val = document.getElementById('subVal');
var history_div = document.getElementsByClassName('history')[0];
var curr=document.getElementById("inputVal").innerHTML = myarray[0];
var per=document.getElementById("inputVal").innerHTML = myarray[1];
var myarray=input_val.value.split('')
function showHide() {
    if (flag) {
        document.getElementById('historybox').style.display = "none";
        document.getElementsByClassName('delete')[0].style.display = "none";
    } else {
        document.getElementById('historybox').style.display = "block";
        document.getElementsByClassName('delete')[0].style.display = "block";
    }
    flag = !flag;
}
function getValue(val)
{
    if(input_val.value == '0')
    {
        input_val.value = val;
    }
    else
    {
        input_val.value += val;
    }
}
function removelastdigit()
{
    if(input_val.value.length>1)
    {
        input_val.value=input_val.value.slice(0,-1);
    }
    else
    {
        input_val.value=input_val.value.slice(0,-1);
        input_val.value="0";
    }
}
function clearAll()
{
    input_val.value = "0";
    sub_val.value = "";
}
function solve()
{
    var equation = input_val.value;
    var ans = eval(equation);
    input_val.value = ans;
    sub_val.value = equation + ' =';
    showHistory(equation, ans);
}
function showHistory(equation, ans)
{
    history_div.innerHTML += `
            <p>${equation} =</p>
            <p>${ans}</p>
    `;
}
function clearHistory()
{
    var choice = confirm("Are you sure you want to delete the history ?");
    if(choice)
    {
        history_div.innerHTML = "";
    }
}
function percentage() {
    var input = document.getElementById('inputVal').value;
    var input_val = input.split(/[-+*/]/);
    var per = Number(input_val[1].replace('%', '')) / 100;
    var ans = Number(input_val[0]) * per; 
    var operator = input.match(/[-+*/]/)[0];
    document.getElementById('inputVal').value = input_val[0] + operator + ans;
  }