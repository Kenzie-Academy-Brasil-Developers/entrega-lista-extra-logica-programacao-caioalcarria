//*primeiro

function calculateSalary(salario, vendas){
  if (vendas>1200){
    return salario+(vendas*0.05)
  }
  else{
    return salario+(vendas*0.03)
  }
}




//*segundo
function cashMachine(saque, salario, vendas){
  let total=0
  if (vendas>1200){
     total =  salario+(vendas*0.05)
  }
  else{
     total =  salario+(vendas*0.03)
  }
  
  let result=[]
  
  
  let control=[]
  let saque0 = saque
  
  let a= parseInt(saque/200)
  if (a!=0){
    saque= saque - (200*a)
    if(a>1){
      control.push(a,'notas de R$200')
      control=control.join()
      control=control.replace(/,/g," ")
      result.push(control)
      control=[]
    }
    else{
      control.push(a,'nota de R$200')
      control=control.join()
      control=control.replace(/,/g," ")
      result.push(control)
      control=[]
    }
  }
  let b= parseInt(saque/100)
  if(b!=0 && saque%200!=0){
    saque= saque - (100*b)
    if(b>1){
      control.push(b, 'notas de R$100')
      control=control.join()
      control=control.replace(/,/g," ")
      result.push(control)
      control=[]
    }
    else{
      control.push(b, 'nota de R$100')
      control=control.join()
      control=control.replace(/,/g," ")
      result.push(control)
      control=[]
    }
  }
  let c= parseInt(saque/50)
  if(c!=0 && saque%100!=0){
    saque= saque - (50*c)
    if(c>1){
      control.push(c, 'notas de R$50')
      control=control.join()
      control=control.replace(/,/g," ")
      result.push(control)
      control=[]
    }
    else{
      control.push(c, 'nota de R$50')
      control=control.join()
      control=control.replace(/,/g," ")
      result.push(control)
      control=[]
    }
  }
  let d= parseInt(saque/20)
  if(d!=0 && saque%50!=0){
    saque= saque - (20*d)
    if(d>1){
      control.push(d, 'notas de R$20')
      control=control.join()
      control=control.replace(/,/g," ")
      result.push(control)
      control=[]
    }
    else{
      control.push(d, 'nota de R$20')
      control=control.join()
      control=control.replace(/,/g," ")
      result.push(control)
      control=[]
    }
  }
  let e= parseInt(saque/10)
  if(e!=0 && saque%20!=0){
    saque= saque - (10*e)
    if(e>1){
      control.push(e, 'notas de R$10')
      control=control.join()
      control=control.replace(/,/g," ")
      result.push(control)
      control=[]
    }
    else{
      control.push(e, 'nota de R$10')
      control=control.join()
      control=control.replace(/,/g," ")
      result.push(control)
      control=[]
    }
  }
  let f= parseInt(saque/5)
  if(f!=0 && saque%10!=0){
    saque= saque - (5*f)
    if(e>1){
      control.push(f, 'notas de R$5')
      control=control.join()
      control=control.replace(/,/g," ")
      result.push(control)
      control=[]
    }
    else{
     control.push(f, 'nota de R$5')
      control=control.join()
      control=control.replace(/,/g," ")
      result.push(control)
      control=[]
    }
  }
  let g= parseInt(saque/2)
  if(g!=0 && saque%5!=0){
    saque= saque - (2*g)
    if(e>1){
    control.push(g, 'notas de R$2')
      control=control.join()
      control=control.replace(/,/g," ")
      result.push(control)
      control=[]
    }
    else{
      control.push(g, 'notas de R$2')
      control=control.join()
      control=control.replace(/,/g," ")
      result.push(control)
      control=[]
    }
  }
  
  let resto = total-saque0
  control.push('Saldo Atual: R$' ,resto)
  control=control.join()
  control=control.replace(/,/g," ")
  result.push(control)
  result= result.join()
  result=result.replace(/,/g,", ")
  console.log(result)
  
  
}




//*terceiro
function calculateStock(estoque, max, min){
  let media= (max+min)/2
  if (estoque>=media){
    return 'Não efetuar compra'
  }
  else{
    return 'Efetuar compra'
  }

  
}






//*quarto
function calculateAge(ano){
  let anos = 2022-ano
  let meses = anos*12
  let dias = anos*360
  let semanas = anos*52
  let result = []
    result.push(anos, 'anos', meses,'meses', semanas, 'semanas', dias, 'dias')
 

  
  result= result.join()
  result=result.replace(/,/g,' ')
  return result
  
  
}


//*quinto
function getDiagonal(matriz){
  
  for (let i=0; i<matriz.length; i++){
      return matriz[i][i]
}
  
}
