#include<bits/stdc++.h>
using namespace std;
int main ()
{
  string s ="SHLOK";
  int len =s.size();
  cout<<len<<endl;
  cout<<s[3];
  cout<<s[len-3]<<endl;
  s[3]='M';
  cout<<s[3];
  return 0;
}