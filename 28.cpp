#include<bits/stdc++.h>
using namespace std;
int main ()
{
    
    long n;
     cin>>n;
     int dup = n;
    long sum=0;
    while(n>0)
    {
        int last=n%10;
        n=n/10;
        sum = sum + (last*last*last);
        
    }
    cout<<sum;
    if(sum==dup)
    {
        cout<<"true";
    }
    else
    {
        cout<<"false";
    }
return 0;
}