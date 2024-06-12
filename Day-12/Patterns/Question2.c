#include<stdio.h>

// Q.2 Write a Program to print 1 to 10 using a do-while loop at the end print product of all numbers.  

main(){
	
	int g = 1,h;
	
	do{
		printf("%d\n",g);
		h*=g;	
		g++;
	}
	while(g <= 10);
	printf("product of all numbers = %d",h);
	
}
