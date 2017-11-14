var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//CLASES 
//  PROPRIEDADES, CONSTRUCTORES, METODOS
var EsClase10;
(function (EsClase10) {
    var Avenger = /** @class */ (function () {
        function Avenger(nombreReal, peleasGanadas, nombre) {
            //cuando pongo el signo de pregunta, tengo que sacar el strict del tsconfig.json
            this._nombre = nombre;
            this.nombreReal = nombreReal;
            this.peleasGanadas = peleasGanadas;
        }
        Avenger.prototype.mostrar = function () {
            return this._nombre + ", " + this.nombreReal + ", " + this.peleasGanadas;
        };
        Object.defineProperty(Avenger.prototype, "nombre", {
            get: function () {
                return this._nombre;
            },
            set: function (nombre) {
                this._nombre = nombre;
            },
            enumerable: true,
            configurable: true
        });
        return Avenger;
    }());
    EsClase10.Avenger = Avenger;
    //OTRA CLASE, HEREDADA
    var Xmen = /** @class */ (function (_super) {
        __extends(Xmen, _super);
        function Xmen(nr, pg, n, p) {
            var _this = _super.call(this, nr, pg, n) || this;
            _this._poder = p;
            return _this;
        }
        Xmen.prototype.mostrar = function () {
            return _super.prototype.mostrar.call(this) + " " + this._poder;
        };
        return Xmen;
    }(Avenger));
    //////////////////////
    var Apocalipsis = /** @class */ (function () {
        //COMO HACER PARA HACER 1 SOLO APOCALIPSIS QUE NO HAYA MAS
        //EL CONSTRUCTOR ES PRIVADO 
        function Apocalipsis(nombre) {
            this.nombre = nombre;
        }
        Object.defineProperty(Apocalipsis, "Instance", {
            //Instancio o no dependiendo si ya existe
            get: function () {
                if (!(this._instance)) {
                    this._instance = new Apocalipsis("HEEELL");
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        return Apocalipsis;
    }());
    var a1 = new Avenger("Iron Man", 10, "Tony");
    var a2 = new Avenger("Bruce", 10);
    var x1 = new Xmen("Logan", 2, "Wolverine", "garras mortales");
    console.log(a1);
    console.log(a1.mostrar());
    console.log(a2.mostrar());
    console.log(x1.mostrar());
    //ARray de avenger
    var array = new Array();
    array.push(a1);
    array.push(a2);
    array.push(x1);
    console.log(Apocalipsis.Instance);
})(EsClase10 || (EsClase10 = {}));
