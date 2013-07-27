<h1>urlActive jQuery plugin</h1>

<h2>jQuery plugin to add a style to the link id according to url</h2>

<h4>The usage:</h4>

<i>Important in your html the href must be the entire link like http://hagile.com.br/ and so on</i><br/>

Need to create a class named .active and set an id named #menu in your stylesheet to get default value
<pre>
<code>
$("#menu a").urlActive();
</code>
</pre>

To set your own style class just pass the parameter myClass

<pre>
<code>
$("#menu a").urlActive({
  'myClass' : 'myNameClass'
});
</code>
</pre>

To set your own id parameter myId

<pre>
<code>
$("#myIdName a").urlActive({
  'myId' : '#myIdName'
});
</code>
</pre>

<h3>Português</h3>

<h2>Plugin jQuery para adicionar um estilo para o ID do link de acordo com a url.</h2>

<h4>O uso:</h4>

<i>Importante em sua html a href deve ser todo o link como http://hagile.com.br/ e assim por diante </ i><br/>

Necessidade de criar uma classe chamada .active em sua folha de estilo para obter o valor default

<pre>
<code>
$ ("#menu a").urlActive();
</code>
</pre>

Para definir sua própria classe de estilo basta passar o parâmetro myClass

<pre>
<code>
$ ("#menu a").urlActive ({
   'myClass': 'myNameClass'
});
</code>
</pre>

Para definir seu próprio id de estilo basta passar o parâmetro myId

<pre>
<code>
$("#myIdName a").urlActive({
  'myId' : '#myIdName'
});
</code>
</pre>
