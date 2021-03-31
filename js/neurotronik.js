var cm;
var previewWrapper = document.getElementsByClassName('preview')[0];
var editorWrapper = document.getElementsByClassName('editor')[0];
$(function () {
	var editor = document.getElementById('editor');
	var preview = document.getElementById('preview');
	cm = CodeMirror.fromTextArea(editor, {
		lineNumbers: true,
		styleActiveLine: true,
		mode: 'text/html',
	});
	updatePreview(cm.getValue());
	cm.on('change', function () {
		updatePreview(cm.getValue());
	});
});

function updatePreview(content) {
	preview.contentWindow.document.open();
	preview.contentWindow.document.write(content);
	preview.contentWindow.document.close();
	coord1 = new Coordinate(1, 1, 1);
	coord2 = new Coordinate(2, 1, 1);
	console.log(coord1);
	console.log(coord2);
}

var example = {
	data: [
		'<h1>Example 1</h1>',
		'<h1>Example 2</h1>',
		'<h1>Example 3</h1>',
		'<h1>Example 4</h1>'
	],
	init: function (number) {
		eval("x = doText(number)");
		cm.setValue(x);
	},
}

function doText(number) {
	return example.data[number];
}

/*COORDINATE CLASS*/
class Coordinate {
	constructor(x, y, z) {
		this.coordinateMatrix = (function (dims) {
			var allocate = function (dims) {
				if (dims.length === 0) {
					return 0;
				} else {
					var array = [];
					for (var i = 0; i < dims[0]; i++) {
						array.push(allocate(dims.slice(1)));
					}
					return array;
				}
			};
			return allocate(dims);
		})([3, 1]);
		this.coordinateMatrix[0][0] = x;
		this.coordinateMatrix[1][0] = y;
		this.coordinateMatrix[2][0] = z;
	}
	getX() {
		return this.coordinateMatrix[0][0];
	}
	getY() {
		return this.coordinateMatrix[1][0];
	}
	getZ() {
		return this.coordinateMatrix[2][0];
	}
	setX(x) {
		this.coordinateMatrix[0][0] = x;
	}
	setY(y) {
		this.coordinateMatrix[0][0] = y;
	}
	setZ(z) {
		this.coordinateMatrix[0][0] = z;
	}
}

/*TUPLE CLASS*/
class Tuple {
	constructor(n1, n2) {
		this.n1 = n1;
		this.n2 = n2;
	}

	getN1() {
		return this.n1;
	}
	getN2() {
		return this.n2;
	}
}

/*ALFA CLASS*/
class Alfa {
	constructor(alfaX, alfaY, alfaZ) {
		this.alfaX = alfaX;
		this.alfaY = alfaY;
		this.alfaZ = alfaZ;
	}

	getAlfaX() {
		return this.alfaX;
	}
	getAlfaY() {
		return this.alfaY;
	}
	getAlfaZ() {
		return this.alfaZ;
	}
}

/*COLOR CLASS*/
class Color {
	constructor(cube, kernel, dense, pyramid, arrow, layerOpacity, kernelOpacity, convOpacity, arrowOpacity, denseOpacity) {
		this.cubeColor = cube;
		this.kernelColor = kernel;
		this.denseColor = dense;
		this.pyramidColor = pyramid;
		this.arrowColor = arrow;
		this.layerOpacity = layerOpacity;
		this.kernelOpacity = kernelOpacity;
		this.convOpacity = convOpacity;
		this.arrowOpacity = arrowOpacity;
		this.denseOpacity = denseOpacity;
	}
	getCubeColor() {
		return this.cubeColor;
	}
	getKernelColor() {
		return this.kernelColor;
	}
	getDenseColor() {
		return this.denseColor;
	}
	getPyramidColor() {
		return this.pyramidColor;
	}
	getArrowColor() {
		return this.arrowColor;
	}
	getLayerOpacity() {
		return this.layerOpacity;
	}
	getKernelOpacity() {
		return this.kernelOpacity;
	}
	getConvOpacity() {
		return this.convOpacity;
	}
	getArrowOpacity() {
		return this.arrowOpacity;
	}
	getDenseOpacity() {
		return this.denseOpacity;
	}
}

/*FONT CLASS*/
class Font {
	constructor(font_size, font_family, font_color) {
		this.font_size = font_size;
		this.font_family = font_family;
		this.font_color = font_color;
	}
	getFont_size() {
		return this.font_size;
	}
	getFont_family() {
		return this.font_family;
	}
	getFont_color() {
		return this.font_color;
	}
}

/*SHIFT CLASS*/
class Shift {
	constructor(shiftNodes, shiftLayers, shiftParent) {

		this.shiftNodes = shiftNodes;
		this.shiftLayers = shiftLayers;
		this.shiftParent = shiftParent;
	}
	getShiftLayers() {
		return this.shiftLayers;
	}
	getShiftNodes() {
		return this.shiftNodes;
	}
	getShiftParent() {
		return this.shiftParent;
	}
}

/*STROKE CLASS*/
class Stroke {
	constructor(stroke_color, stroke_width) {
		this.stroke_color = stroke_color;
		this.stroke_width = stroke_width;
	}
	getStroke_color() {
		return this.stroke_color;
	}
	getStroke_width() {
		return this.stroke_width;
	}
}

/*VIEWBOX CLASS */
class ViewBox {
	constructor(width, height, zoom) {
		this.width = width;
		this.height = height;
		this.zoom = -zoom;
	}
	getWidth() {
		return this.width;
	}
	getHeight() {
		return this.height;
	}
	getZoom() {
		return this.zoom;
	}
}
/*DRAW SETTINGS */
class DrawSettings {
	constructor(color, alfa, shift, font, stroke, viewBox, activateDepthLogs, activateWidhtLogs, activateLayerDimensions, activateKernelDimensions) {
		this.color = color;
		this.alfa = alfa;
		this.shift = shift;
		this.font = font;
		this.stroke = stroke;
		this.viewBox = viewBox;
		this.activateDepthLogs = activateDepthLogs;
		this.activateWidhtLogs = activateWidhtLogs;
		this.activateLayerDimensions = activateLayerDimensions;
		this.activateKernelDimensions = activateKernelDimensions;
	}
	getColor() {
		return this.color;
	}
	getAlfa() {
		return this.alfa;
	}
	getShift() {
		return this.shift;
	}
	getFont() {
		return this.font;
	}
	getStroke() {
		return this.stroke;
	}
	getViewBox() {
		return this.viewBox;
	}
	isActivateLayerDimensions() {
		return this.activateLayerDimensions;
	}
	isActivateKernelDimensions() {
		return this.activateKernelDimensions;
	}
	logWidth(num) {
		if (this.activateWidhtLogs) {
			return Math.log(num) / Math.log(2);
		}
		return num;
	}
	logDepth(num) {
		if (this.activateDepthLogs) {
			return Math.log(num) / Math.log(2);
		}
		return num;
	}
}

/*LAYERS CLASS */
class Layers {
	constructor(drawSettings) {
		this.cube_actual = new Cube();
		this.drawSettings = drawSettings;
	}
	Input(input) {
		let cubeList = new ArrayList();
		this.cube_actual = input;
		cubeList.add(input);
		return cubeList;
	}
	Conv2D$4(filters, kernel_size, strides, padding) {
		let cubeList = new ArrayList();
		let CNNCube = this.createKernel(this.cube_actual.getZ(), kernel_size);
		cubeList.add(CNNCube);
		this.setConvolution(filters, kernel_size, strides, padding);
		cubeList.add(this.cube_actual);
		return cubeList;
	}
	Conv2D$5(filters, kernel_size, strides, input, padding) {
		let cubeList = new ArrayList();
		this.cube_actual = input;
		cubeList.add(input);
		let CNNCube = this.createKernel(this.cube_actual.getZ(), kernel_size);
		cubeList.add(CNNCube);
		this.setConvolution(filters, kernel_size, strides, padding);
		cubeList.add(this.cube_actual);
		return cubeList;
	}
	Conv2D(...args$) {
		switch (args$.length) {
			case 4:
				return this.Conv2D$4(...args$);
			case 5:
				return this.Conv2D$5(...args$);
		}
	}
	MaxPooling2D(tuple) {
		this.setPooling(tuple);
	}
	Dense(vector) {
		let cubeList = new ArrayList();
		let cube = new Cube(new Coordinate(10, vector, 10), this.drawSettings);
		cube.setDenseLayer(true);
		this.cube_actual = cube;
		cubeList.add(cube);
		return cubeList;
	}
	concatenate(nodes) {
		let node = nodes[0];
		let z = 0;
		for (let n of nodes) {
			z += n.getLastCube().getZ();
		}
		let cubeList = new Array();
		if (this.denseLayer) {
			return cubeList;
		}
		let newCube = new Cube(new Coordinate(node.getLastCube().getX(), node.getLastCube().getY(), z), this.drawSettings);
		cubeList.push(newCube);
		this.cube_actual = newCube;
		return cubeList;
	}
	setDenseLayer(denseLayer) {
		this.denseLayer = this.denseLayer;
	}
	setPooling(tuple) {
		let x = (this.cube_actual.getX()) / tuple.getN1();
		let y = (this.cube_actual.getY()) / tuple.getN2();
		this.setNewDimensions(x, y, this.cube_actual.getZ());
	}
	setConvolution(filters, kernel_size, strides, padding) {
		let output_w = this.cube_actual.getX();
		let output_h = this.cube_actual.getY();
		if (strides !== null && padding !== null) {
			if (padding.equals('valid')) {
				output_w = (this.cube_actual.getX() - kernel_size.getN1() + 1) / strides.getN1();
				output_h = (this.cube_actual.getY() - kernel_size.getN2() + 1) / strides.getN2();
			}
			if (padding.equals('same')) {
				output_w = (this.cube_actual.getX()) / strides.getN1();
				output_h = (this.cube_actual.getY()) / strides.getN2();
			}
		}
		this.setNewDimensions(output_w, output_h, filters);
	}
	createKernel(z, tuple) {
		let coordinates = new Coordinate(tuple.getN1(), tuple.getN2(), z);
		let kernel = new Cube(coordinates, this.drawSettings);
		kernel.setKernel(true);
		return kernel;
	}
	setNewDimensions(x, y, z) {
		let coordinate = new Coordinate(x, y, z);
		this.cube_actual = new Cube(coordinate, this.drawSettings);
	}
}

/*MATRICES*/
class RotationMatrixX {
	constructor(alfa) {
		this.initializeMatrix(alfa);
	}
	initializeMatrix(alfa) {
		this.matrix = (function (dims) {
			var allocate = function (dims) {
				if (dims.length === 0) {
					return 0;
				} else {
					var array = [];
					for (var i = 0; i < dims[0]; i++) {
						array.push(allocate(dims.slice(1)));
					}
					return array;
				}
			};
			return allocate(dims);
		})([3, 3]);
		this.matrix[0][0] = 1;
		this.matrix[1][0] = 0;
		this.matrix[2][0] = 0;

		this.matrix[0][1] = 0;
		this.matrix[1][1] = Math.cos(Math.toRadians(alfa));
		this.matrix[2][1] = Math.sin(Math.toRadians(alfa));

		this.matrix[0][2] = 0;
		this.matrix[1][2] = -(Math.sin(Math.toRadians(alfa)));
		this.matrix[2][2] = Math.cos(Math.toRadians(alfa));
	}
	getMatrix() {
		return this.matrix;
	}
}

class RotationMatrixY {
	constructor(alfa) {
		this.initializeMatrix(alfa);
	}
	initializeMatrix(alfa) {
		this.matrix = (function (dims) {
			var allocate = function (dims) {
				if (dims.length === 0) {
					return 0;
				} else {
					var array = [];
					for (var i = 0; i < dims[0]; i++) {
						array.push(allocate(dims.slice(1)));
					}
					return array;
				}
			};
			return allocate(dims);
		})([3, 3]);
		this.matrix[0][0] = Math.cos(Math.toRadians(alfa));
		this.matrix[1][0] = 0;
		this.matrix[2][0] = -(Math.sin(Math.toRadians(alfa)));

		this.matrix[0][1] = 0;
		this.matrix[1][1] = 1;
		this.matrix[2][1] = 0;

		this.matrix[0][2] = Math.sin(Math.toRadians(alfa));
		this.matrix[1][2] = 0;
		this.matrix[2][2] = Math.cos(Math.toRadians(alfa));
	}
	getMatrix() {
		return this.matrix;
	}
}

class RotationMatrixZ {
	constructor(alfa) {
		this.initializeMatrix(alfa);
	}
	initializeMatrix(alfa) {
		this.matrix = (function (dims) {
			var allocate = function (dims) {
				if (dims.length === 0) {
					return 0;
				} else {
					var array = [];
					for (var i = 0; i < dims[0]; i++) {
						array.push(allocate(dims.slice(1)));
					}
					return array;
				}
			};
			return allocate(dims);
		})([3, 3]);
		this.matrix[0][0] = Math.cos(Math.toRadians(alfa));
		this.matrix[1][0] = Math.sin(Math.toRadians(alfa));
		this.matrix[2][0] = 0;

		this.matrix[0][1] = -(Math.sin(Math.toRadians(alfa)));
		this.matrix[1][1] = Math.cos(Math.toRadians(alfa));
		this.matrix[2][1] = 0;

		this.matrix[0][2] = 0;
		this.matrix[1][2] = 0;
		this.matrix[2][2] = 1;
	}
	getMatrix() {
		return this.matrix;
	}
}

/*MATRIX CONTROLLER*/
class MatrixController {
	constructor(alfaX, alfaY, alfaZ) {
		let rotationMatrixX = new RotationMatrixX(alfaX);
		let rotationMatrixY = new RotationMatrixY(alfaY);
		let rotationMatrixZ = new RotationMatrixZ(alfaZ);
		this.matrix = multiply(rotationMatrixZ.getMatrix(), rotationMatrixX.getMatrix());
		this.matrix = multiply(this.matrix, rotationMatrixY.getMatrix());
	}
	rotate(coordinates) {
		this.setNewCoordinates(coordinates);
	}
	move(axis, coordinates, length) {
		switch (axis) {
			case "x":
				{
					coordinates[0].setX(coordinates[0].getX() + length);
					coordinates[1].setX(coordinates[1].getX() + length);
					coordinates[2].setX(coordinates[2].getX() + length);
					coordinates[3].setX(coordinates[3].getX() + length);
					coordinates[4].setX(coordinates[4].getX() + length);
					coordinates[5].setX(coordinates[5].getX() + length);
					coordinates[6].setX(coordinates[6].getX() + length);
					coordinates[7].setX(coordinates[7].getX() + length);
					coordinates[8].setX(coordinates[8].getX() + length);
					break;
				}
			case "y":
				{
					coordinates[0].setY(coordinates[0].getY() + length);
					coordinates[1].setY(coordinates[1].getY() + length);
					coordinates[2].setY(coordinates[2].getY() + length);
					coordinates[3].setY(coordinates[3].getY() + length);
					coordinates[4].setY(coordinates[4].getY() + length);
					coordinates[5].setY(coordinates[5].getY() + length);
					coordinates[6].setY(coordinates[6].getY() + length);
					coordinates[7].setY(coordinates[7].getY() + length);
					coordinates[8].setY(coordinates[8].getY() + length);
					break;
				}
			case "z":
				{
					coordinates[0].setZ(coordinates[0].getZ() + length);
					coordinates[1].setZ(coordinates[1].getZ() + length);
					coordinates[2].setZ(coordinates[2].getZ() + length);
					coordinates[3].setZ(coordinates[3].getZ() + length);
					coordinates[4].setZ(coordinates[4].getZ() + length);
					coordinates[5].setZ(coordinates[5].getZ() + length);
					coordinates[6].setZ(coordinates[6].getZ() + length);
					coordinates[7].setZ(coordinates[7].getZ() + length);
					coordinates[8].setZ(coordinates[8].getZ() + length);
					break;
				}
		}
	}
	setNewCoordinates(coordinates) {
		let c0 = multiply(this.matrix, coordinates[0].getCoordinateMatrix());
		let c1 = multiply(this.matrix, coordinates[1].getCoordinateMatrix());
		let c2 = multiply(this.matrix, coordinates[2].getCoordinateMatrix());
		let c3 = multiply(this.matrix, coordinates[3].getCoordinateMatrix());
		let c4 = multiply(this.matrix, coordinates[4].getCoordinateMatrix());
		let c5 = multiply(this.matrix, coordinates[5].getCoordinateMatrix());
		let c6 = multiply(this.matrix, coordinates[6].getCoordinateMatrix());
		let c7 = multiply(this.matrix, coordinates[7].getCoordinateMatrix());
		let c8 = multiply(this.matrix, coordinates[8].getCoordinateMatrix());
		coordinates[0] = new Coordinate(c0[0][0], c0[1][0], c0[2][0]);
		coordinates[1] = new Coordinate(c1[0][0], c1[1][0], c1[2][0]);
		coordinates[2] = new Coordinate(c2[0][0], c2[1][0], c2[2][0]);
		coordinates[3] = new Coordinate(c3[0][0], c3[1][0], c3[2][0]);
		coordinates[4] = new Coordinate(c4[0][0], c4[1][0], c4[2][0]);
		coordinates[5] = new Coordinate(c5[0][0], c5[1][0], c5[2][0]);
		coordinates[6] = new Coordinate(c6[0][0], c6[1][0], c6[2][0]);
		coordinates[7] = new Coordinate(c7[0][0], c7[1][0], c7[2][0]);
		coordinates[8] = new Coordinate(c8[0][0], c8[1][0], c8[2][0]);
	}
	multiply(a, b) {
		var c = (function (dims) {
			var allocate = function (dims) {
				if (dims.length === 0) {
					return 0;
				} else {
					var array = [];
					for (var i = 0; i < dims[0]; i++) {
						array.push(allocate(dims.slice(1)));
					}
					return array;
				}
			};
			return allocate(dims);
		})([a.length, b[0].length]);
		for (var i = 0; i < c.length; i++) {
			for (var j = 0; j < c[0].length; j++) {
				for (var k = 0; k < b.length; k++) {
					c[i][j] += a[i][k] * b[k][j];
				};
			};
		}
		return c;
	}
}

/*MODEL CLASS*/
class Model {
	constructor() {
		this.modelTree = new NeuralNetworkTree();
	}
	getModelTree() {
		return this.modelTree;
	}
	add$1(x1) {
		this.modelTree.addRoot(x1);
	}
	add$2(child, parent) {
		this.modelTree.add(child, parent);
	}
	add(...args$) {
		switch (args$.length) {
			case 1:
				return this.add$1(...args$);
			case 2:
				return this.add$2(...args$);
		}
	}
	addJump(n1, n2) {
		let jump = new ArrayList();
		jump.add(n1);
		jump.add(n2);
		this.getModelTree().getJumps().add(jump);
	}
}

/*ARROW CLASS*/
class Arrow {
	constructor(vertex1, vertex2) {
		this.vertex1 = vertex1;
		this.vertex2 = vertex2;
		this.coordinates[0] = new Coordinate(vertex1.getX(), vertex1.getY(), vertex1.getZ());
		this.coordinates[1] = new Coordinate(vertex2.getX(), vertex2.getY(), vertex2.getZ());
	}
	getCoordinates() {
		return this.coordinates;
	}
	getVertex1() {
		return this.vertex1;
	}
	getVertex2() {
		return this.vertex2;
	}
}

/*CUBE CLASS*/
class Cube {
	constructor(vertex1, vertex2) {
		this.initializeCube(coordinates, drawSettings);
	}
	initializeCube(coordinate, drawSettings) {
		this.x = coordinate.getX();
		this.y = coordinate.getY();
		this.z = coordinate.getZ();
		this.isDenseLayer = false;
		this.isKernel = false;
		let x_aux = drawSettings.logWidth(this.x);
		let y_aux = drawSettings.logWidth(this.y);
		let z_aux = drawSettings.logDepth(this.z);
		this.coordinates[0] = (new Coordinate(-(x_aux / 2), -(y_aux / 2), z_aux / 2));
		this.coordinates[1] = (new Coordinate(x_aux / 2, -(y_aux / 2), z_aux / 2));
		this.coordinates[2] = (new Coordinate(-(x_aux / 2), (y_aux / 2), z_aux / 2));
		this.coordinates[3] = (new Coordinate(x_aux / 2, y_aux / 2, z_aux / 2));
		this.coordinates[4] = (new Coordinate(-(x_aux / 2), -(y_aux / 2), -(z_aux / 2)));
		this.coordinates[5] = (new Coordinate(x_aux / 2, -(y_aux / 2), -(z_aux / 2)));
		this.coordinates[6] = (new Coordinate(-(x_aux / 2), y_aux / 2, -(z_aux / 2)));
		this.coordinates[7] = (new Coordinate(x_aux / 2, y_aux / 2, -(z_aux / 2)));
		let x_random = Math.random() * (coordinates[5].getX() - coordinates[4].getX()) + coordinates[4].getX();
		let y_random = Math.random() * (coordinates[6].getY() - coordinates[4].getY()) + coordinates[4].getY();
		this.coordinates[8] = new Coordinate(x_random, y_random, coordinates[4].getZ());
	}
	getX() {
		return this.x;
	}
	getY() {
		return this.y;
	}
	getZ() {
		return this.z;
	}
	isKernel() {
		return this.isKernel;
	}
	setKernel(kernel) {
		this.isKernel = kernel;
	}
	getCoordinates() {
		return this.coordinates
	}
	isDenseLayer() {
		return this.isDenseLayer;
	}
	setDenseLayer(denseLayer) {
		this.isDenseLayer = denseLayer;
	}
}
/*PYRAMID CLASS*/
class Pyramid {
	constructor(vertex1, vertex2) {
		this.initializePyramid(coordinates, point);
	}
	initializePyramid(coordinate, drawSettings) {
		this.vertex = new Coordinate(point.getX(), point.getY(), point.getZ());
		this.coordinates[0] = (new Coordinate(coordinates[0].getX(), coordinates[0].getY(), coordinates[0].getZ()));
		this.coordinates[1] = (new Coordinate(coordinates[1].getX(), coordinates[1].getY(), coordinates[1].getZ()));
		this.coordinates[2] = (new Coordinate(coordinates[2].getX(), coordinates[2].getY(), coordinates[2].getZ()));
		this.coordinates[3] = (new Coordinate(coordinates[3].getX(), coordinates[3].getY(), coordinates[3].getZ()));
		this.coordinates[4] = (new Coordinate(point.getX(), point.getY(), point.getZ()));
	}
	getCoordinates() {
		return this.coordinates;
	}
	getVertex() {
		return this.vertex;
	}
}

/*NODE CLASS*/
class Node {
	constructor() {
	  this.cubeList = new ArrayList();
	  this.lastCube = null;
	  this.parent = null;
	  this.children = new ArrayList();
	}
	getCubeList() {
	  return this.cubeList;
	}
	getLastCube() {
	  return this.lastCube;
	}
	setLastCube(lastCube) {
	  this.lastCube = this.lastCube;
	}
	setParent(parent) {
	  this.parent = this.parent;
	}
	getChildren() {
	  return this.children;
	}
	getParent() {
	  return this.parent;
	}
	add(cubeList) {
	  this.getCubeList().addAll(this.cubeList);
	  if (!this.getCubeList().isEmpty()) {
		this.setLastCube(this.cubeList.get(this.cubeList.size() - 1));
	  }
	}
  }

  /*NEURALNETOWRK TREE*/
  class NeuralNetworkTree {
	constructor() {
	  this.root = null;
	  this.nodes = null;
	  this.jumps = new Array();
	}
	isEmpty() {
	  return (this.root === null);
	}
	isLeaf(node) {
	  return (node.getChildren() === null) || (node.getChildren().isEmpty());
	}
	isRoot(node) {
	  return (node === this.root());
	}
	getNodes() {
	  return this.nodes;
	}
	getJumps() {
	  return this.jumps;
	}
	root() {
	  if (this.root === null) {
		throw new RuntimeException('The tree is empty');
	  }
	  return this.root;
	}
	addRoot(node) {
	  if (this.isEmpty()) {
		this.root = node;
	  } else {
		throw new RuntimeException('Tree already has a root');
	  }
	}
	add(child, parent) {
	  parent.getChildren().add(child);
	  child.setParent(parent);
	}
	levels(node, maxDepth) {
	  if (node !== null) {
		if (this.isLeaf(node)) {
		  if (!this.nodes[this.maxDepth - 1].contains(node)) {
			this.nodes[this.maxDepth - 1].add(node);
		  }
		} else {
		  let level = this.level(node);
		  if (!this.nodes[this.level].contains(node)) {
			this.nodes[level].push(node);
		  }
		  for (let child of node.getChildren()) {
			this.levels(child, maxDepth);
		  }
		}
	  }
	}
	maxDepth(root) {
	  if (this.root === null) {
		return 0;
	  }
	  let max = Integer.MIN_VALUE;
	  for (let child of root.getChildren()) {
		max = Math.max(max, this.maxDepth(child));
	  }
	  return 1 + Math.max(max, 0);
	}
	level(node) {
	  let l = 0;
	  while (!this.isParent(node)) {
		node = node.getParent();
		l++;
	  }
	  return l;
	}
	greaterDepthChild(children) {
	  let max = Double.MIN_VALUE;
	  for (let child of children) {
		if (child.getCoordinates()[0].getZ() > max) {
		  max = child.getLastCube().getCoordinates()[0].getZ();
		}
	  }
	  return max;
	}
	findLastChild(nodes) {
	  let max = Number.MIN_VALUE;
	  let lastChild = null;
	  for (let node of nodes) {
		let cube = node.getCubeList().get(0);
		if (cube.getCoordinates()[1].getX() > max) {
		  max = cube.getCoordinates()[1].getX();
		  lastChild = node;
		}
	  }
	  return lastChild;
	}
	findFirstChild(nodes) {
	  let min = Number.MAX_VALUE;
	  let firstChild = null;
	  for (let node of nodes) {
		let cube = node.getCubeList().get(0);
		if (cube.getCoordinates()[1].getX() < min) {
		  min = cube.getCoordinates()[1].getX();
		  firstChild = node;
		}
	  }
	  return firstChild;
	}
	isParent(node) {
	  return node.getParent() === null;
	}
	check() {
	  for (let nodes of this.getNodes()) {
		for (let node of nodes) {
		  if (node.getCubeList().isEmpty() || node.getCubeList() === null) {
			throw new RuntimeException('The neural network has been poorly defined.');
		  }
		}
	  }
	}
	initializeNodes(){
		let maxDepth = this.maxDepth(this.root());
		this.nodes = [];
		for(let i=0;i<maxDepth;i++){
			this.nodes[i] = new Array();
		}
		this.levels(this.root(),maxDepth);
		this.check();
		Collections.reverse(Arrays.asList(this.nodes));
	}
  }