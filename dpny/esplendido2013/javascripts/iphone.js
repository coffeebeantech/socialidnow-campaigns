(function(a)
{
	function g()
	{
		f.content="width=device-width,minimum-scale=" + e[0] + ",maximum-scale=" + e[1];
		a.removeEventListener(c,g,true)
	}
	
	var b="addEventListener",
		c="gesturestart",
		d="querySelectorAll",
		e=[1,1],
		f=d in a?a[d]("meta[name=viewport]"):[];
		
		if ((f = f[f.length-1]) && b in a)
		{
			g();
			e=[.25,1.6];
			a[b](c,g,true)
		}
})(document)