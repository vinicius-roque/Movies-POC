var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { connection } from '../database/db.js';
function createMovie(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, streaming, genre, status, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, name = _a.name, streaming = _a.streaming, genre = _a.genre, status = _a.status;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, connection.query('INSERT INTO movies (name, streaming, genre, status) VALUES ($1, $2, $3, $4);', [name, streaming, genre, status])];
                case 2:
                    _b.sent();
                    return [2 /*return*/, res.sendStatus(201)];
                case 3:
                    error_1 = _b.sent();
                    return [2 /*return*/, res.status(500).send(error_1.message)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function listMovies(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var movies, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, connection.query('SELECT * FROM movies;')];
                case 1:
                    movies = (_a.sent()).rows;
                    return [2 /*return*/, res.status(200).send(movies)];
                case 2:
                    error_2 = _a.sent();
                    return [2 /*return*/, res.status(500).send(error_2.message)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function deleteMovie(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, movie, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, connection.query('SELECT movies.id, name, streaming, genre, status FROM movies WHERE movies.id = $1;', [id])];
                case 2:
                    movie = (_a.sent()).rows[0];
                    if (!movie) {
                        return [2 /*return*/, res.status(404).send("This movie doesn't exists!")];
                    }
                    return [4 /*yield*/, connection.query('DELETE FROM movies WHERE id = $1;', [id])];
                case 3:
                    _a.sent();
                    return [2 /*return*/, res.sendStatus(202)];
                case 4:
                    error_3 = _a.sent();
                    return [2 /*return*/, res.status(500).send(error_3.message)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function updateMovie(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, _a, name, streaming, genre, status, movie, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = req.params.id;
                    _a = req.body, name = _a.name, streaming = _a.streaming, genre = _a.genre, status = _a.status;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, connection.query('SELECT movies.id, name, streaming, genre, status FROM movies WHERE movies.id = $1;', [id])];
                case 2:
                    movie = (_b.sent()).rows[0];
                    if (!movie) {
                        return [2 /*return*/, res.status(404).send("This movie doesn't exists!")];
                    }
                    return [4 /*yield*/, connection.query('UPDATE movies SET name = $1, streaming = $2, genre = $3, status = $4 WHERE id = $5;', [name, streaming, genre, status, id])];
                case 3:
                    _b.sent();
                    return [2 /*return*/, res.sendStatus(202)];
                case 4:
                    error_4 = _b.sent();
                    return [2 /*return*/, res.status(500).send(error_4.message)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
export { createMovie, listMovies, deleteMovie, updateMovie };
