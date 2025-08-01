
numeros = [23, 5, 12, 17, 5, 23, 7, 42, 8, 3, 7, 42, 5, 12, 15, 7]

def dataArray(arrayNum):
    data = []
    
    data.append({"n": len(arrayNum)})
    data.append({"minElement": min(arrayNum)})
    data.append({"maxElement": max(arrayNum)})
    
    return data

def promedio (arrayNum): 
    suma = 0
    for num in arrayNum:
        suma+=num
        
    return suma/len(arrayNum)
    
def cleanDuplicated(arrayNum):
    data=[]
    
    for num in arrayNum:
        if(not num in data):
            data.append(num)
    
    return data

def findElement(arrayNum,numFind):
    
    for index, item in enumerate(arrayNum):
        if(item == numFind):
            return {"numero": item, "position": index}
            
def countElements(arrayNum):
    data=[]
    for num in arrayNum:
        element = {"numero": num, "ocurrencias": arrayNum.count(num)}
        if(not element in data ):
            data.append(element)
    
    return data
    

print('Arreglor original',numeros)
print('Promedio',promedio(numeros))
print('info arreglo',dataArray(numeros))
print("Min",min(numeros))
print("Max",max(numeros))
numeros.sort()
print("sorted",numeros)
print("no repetidos",cleanDuplicated(numeros))
print("buscar elemento",findElement(numeros,17))
print("ocurrencias", countElements(numeros))