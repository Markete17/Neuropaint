# Neuropaint - Marcos Ruiz Muñoz 📄

## Index ✒️
1. [Description 🚀](#description)
2. [User Interface 🎨](#ui)
3. [Functions 📌](#functions)

<a name="description"></a>
## 1. Description 🚀

<p align="justify">
  Neuropaint is a website for creating representations of neural networks of all kinds. It has a user interface with which you can edit and configure everything. Practice, create and edit the representation of your neural network!
</p>

<p align="center">
  <a href="https://ibb.co/nC5WMC4"><img src="https://i.ibb.co/8cShgcG/Captura.png" alt="Home Page" border="0"></a>
</p>

<hr>

<a name="ui"></a>
## 2. User Interface 🎨 

<p align="justify">
In Neuropaint you can edit any configuration on the image and the neural network. Next, the different buttons and menus that you can use on the web will be described.
</p>

### Preview Buttons

<p align="center">
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/QKDqZyJ/Captura.png" alt="Preview Buttons" border="0"></a>
</p>

  - <b>Save Image:</b> You can save your image in an SVG file with the name you want.
  - <b>Open Code:</b> You can load a previously saved code (only .txt file) to continue editing your neural network representation.
  - <b>Expand Preview:</b> You can expand the preview and hide the code editor.

### Zoom Buttons

<p align="center">
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/Tq24r2h/Captura.png" alt="Zoom Buttons" border="0"></a>
</p>

  - <b>Zoom In:</b> Zoom in on the image.
  - <b>Zoom Out:</b> Zoom out on the image.
  - <b>Reset:</b> Reset the zoom settings.

### Editor Buttons
<p align="center">
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/rQzjsZh/Captura.png" alt="Editor Buttons" border="0"></a>
</p>

  - <b>Save Code:</b> You can save your code to continue editing it at another time.
  - <b>Select an example:</b> Select one of the neural network representation examples. It will help you as a guide to create your own.
  
### Menu
<p align="center">
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/7VtTMj9/Captura.png" alt="Menu" border="0"></a>
</p>
<p align="justify">
In the upper left corner, you will find a button to access the menu with which you can edit any aspect and style.
</p>

 - <b>Color Settings:</b> You will be able to edit the color of all the different layers of the neural network.
 <p align="center">
  <br>
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/pPd0MVz/Captura.png" alt="Color Settings" border="0"></a>
</p>
 - <b>Font Settings:</b> You can change the size and font.
 <p align="center">
  <br>
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/rsc2dvJ/Captura.png" alt="Font Settings" border="0"></a>
</p>
 - <b>Rotation Settings:</b> You can rotate the neural network on all axes.
 <p align="center">
  <br>
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/5BpZ2HY/Captura.png" alt="Rotation Settings" border="0"></a>
</p>
 - <b>Distance Settings:</b> You can change the distance between the nodes <b>(Nodes Distance)</b> or the distance between the different layers <b>(Layers Distance)</b> or also, the distance between the parent node and the child node <b>(Parent Distance)</b>.
 <p align="center">
  <br>
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/xgk0FSc/Captura.png" alt="Distance Settings" border="0"></a>
</p>
 - <b>Dimension Settings:</b> You can show or hide the size of the layers and also activate or deactivate algorithms in the dimension.
 <p align="center">
  <br>
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/6vtQpg2/Captura.png" alt="Dimension Text" border="0"></a>
</p>
 <p align="center">
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/MhHG0xG/Captura.png" alt="Logarithms" border="0"></a>
</p>
 - <b>Documentation & About:</b> You can find a lot of information even by contacting me on social media!
 <p align="center">
  <br>
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/Tc2vgN4/Captura.png" alt="Documentation" border="0"></a>
</p>

<hr>

<a name="functions"></a>
## 3. Functions 📌 
1. [Declarations](#declarations)
2. [Input](#input)
3. [Conv2D](#conv2d)
4. [Deconv2D](#deconv2d)
5. [MaxPooling2D](#maxpooling2d)
6. [Dense](#dense)
7. [Concatenate](#concatenate)
8. [AddEncoder](#encoder)

<a name="declarations"></a>
### 1. Declarations

<p align="justify">
  Create the nodes you want with the following function.
</p>
  <pre><code>var n1 = new Node();</code></pre>

<a name="input"></a>         
### 2. Input
<p align="justify">
  Create the input layer with the dimensions you want and add it to a node.
</p>
<pre><code>n1.add(Input(48,32,10));</code></pre>
<p align="center">
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/PxX6MRn/Captura.png" alt="Input" border="0"></a>
</p>

<a name="conv2d"></a> 
### 3. Conv2D
<p align="justify">
  Add a convolution layer to the node with the Conv2D function that has these arguments:
</p>
<ul>
<li><b>Filters:</b> the next Z dimension</li>
<li><b>Kernel Size:</b> x and y dimension of the kernel</li>
<li><b>Strides:</b> An integer or tuple / list of 2 integers, specifying the steps of the convolution along the height and width.</li>
  <li><b>Padding:</b> one of <b>"valid"</b> or <b>"same"</b> (case-insensitive). "valid" means no padding. "same" results in padding with zeros evenly to the left/right or up/down of the input such that output has the same height/width dimension as the input.</li>
  </ul>
<pre><code>n1.add(Input(48,32,10));
n1.add(Conv2D(32,[10,10],[1,1],"same"));</code></pre>
<p align="justify">
  You can also create the input layer in this function.
</p>
<pre><code>n1.add(Conv2D(32,[10,10],[1,1],"same",Input(48,32,10)));</code></pre>
<p align="center">
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/rtc34KW/Captura.png" alt="Conv2D" border="0"></a>
</p>

<a name="deconv2d"></a> 
### 4. Deconv2D
<p align="justify">
  Add a deconvolution layer to the node with the Deconv2D function that has these arguments:
</p>
<ul>
<li><b>Filters:</b> the next Z dimension</li>
<li><b>Kernel Size:</b> x and y dimension of the kernel</li>
<li><b>Strides:</b> An integer or tuple / list of 2 integers, specifying the steps of the convolution along the height and width.</li>
  <li><b>Padding:</b> one of <b>"valid"</b> or <b>"same"</b> (case-insensitive). "valid" means no padding. "same" results in padding with zeros evenly to the left/right or up/down of the input such that output has the same height/width dimension as the input.</li>
  </ul>
<pre><code>n1.add(Input(32,32,20));
n1.add(Deconv2D(48,[10,10],[2,2],"same"));</code></pre>
<p align="justify">
  You can also create the input layer in this function.
</p>
<pre><code>n1.add(Deconv2D(48,[10,10],[2,2],"same",Input(32,32,20)));</code></pre>
<p align="center">
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/B27C6Lj/Captura.png" alt="Captura" border="0"></a>
</p>

<a name="maxpooling2d"></a> 
### 5. MaxPooling2D
<p align="justify">
 Operation to decrease the 2D size of the neural network node.
</p>
<pre><code>n1.add(Input(48,32,10));
n1.add(Conv2D(32,[10,10], [1,1], "same"));
n1.add(MaxPooling2D([2,2]));
n1.add(Conv2D(64,[5,5],[1,1],"same"));</code></pre>
<p align="center">
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/gV2zRch/Captura.png" alt="MaxPooling2D" border="0"></a>
</p>

<a name="dense"></a>  
### 6. Dense
<p align="justify">
 Create a dense layer with the following function.
</p>
<pre><code>n1.add(Dense(100));
n1.add(Dense(200));</code></pre>
<p align="center">
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/TRjwzLW/Captura.png" alt="Dense" border="0"></a>
</p>

<a name="concatenate"></a> 
### 7. Concatenate
<p align="justify">
 Concatenate Neural Network Nodes.
</p>
<pre><code>x1a.add(Input(32,32,20));
x1a.add(Conv2D(32,[10,10],[1,1],"same"));
x1b.add(Input(32,32,20));
x1b.add(Conv2D(32,[10,10],[1,1],"same"));
x1.add(Concatenate([x1a, x1b]));
xp3.add(Dense(100));</code></pre>

<p align="justify">
Remember that you must also define it in the model.
</p>

<pre><code>model.add(xp3);
model.add(x1a,x1);
model.add(x1b,x1);
model.add(x1,xp3);</code></pre>

<p align="center">
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/VHdybJ2/Captura.png" alt="Concatenate" border="0"></a>
</p>

<a name="encoder"></a> 
### 8. Add Encoder
<p align="justify">
 You can join any layer of any node to each other.
</p>
<pre><code>n1.add(Input(48,32,10));
n4=n1.add(Conv2D(32,[10,10],[1,1],"same"));
n6=n1.add(Conv2D(64,[5,5],[1,1],"same"));
n7=n1.add(Conv2D(72,[10,10],[1,1],"same"));
n2.add(Input(48,32,10));
n5=n2.add(Conv2D(32,[10,10],[1,1],"same"));
n8=n2.add(Conv2D(64,[5,5],[1,1],"same"));
n9=n2.add(Conv2D(72,[10,10],[1,1],"same"));
n3.add(Dense(150));
n3.add(Dense(150));</code></pre>

<p align="justify">
In the model:
</p>

<pre><code>model.add(n3);
model.add(n1,n3);
model.add(n2,n3);
model.addEncoder(n4,n5);
model.addEncoder(n6,n7);
model.addEncoder(n8,n9);
</code></pre>

<p align="center">
  <a href="https://ibb.co/F6SJsBv"><img src="https://i.ibb.co/rkCMbZP/Captura.png" alt="Encoder" border="0"></a>
</p>
