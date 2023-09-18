#include<bits/stdc++.h>
using namespace std;
int main ()
{
    int x;
    cout<<"enter the marks"<<endl;
    cin>>x;
    if(x>=80)
    {
        cout<<"A"<<endl;
    }
    else if (x>=60)
    {
        cout<<"B"<<endl;
    }
    else if(x>=50)
    {
        cout<<"C"<<endl;
    }
      else if(x>=45)
    {
        cout<<"D"<<endl;
    }
       else if(x>=25)
    {
        cout<<"E"<<endl;
    }
          else 
    {
        cout<<"F"<<endl;
    }
    return 0;
}