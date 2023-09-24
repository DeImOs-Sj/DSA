#include<bits/stdc++.h>
using namespace std;
int main ()
{
    
    int n;
     cin>>n;
     int dup = n;
    int revno=0;
    while(n>0)
    {
        int last=n%10;
        revno = (revno*10) + last;
        n=n/10;
    }
    cout<<revno;
    if(dup==revno)
    {
        cout<<"true";
    }
    else
    {
        cout<<"false";
    }
return 0;
}