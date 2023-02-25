def decimalToBinary(n):
    bin = ''
    quot = n

    while(quot != 0):
        rem = quot % 2
        bin = str(rem) + bin
        quot = quot //2

    return(bin)


print(decimalToBinary(10))
