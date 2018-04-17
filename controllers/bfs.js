var _pj;
var peta;
function _pj_snippets(container) {
    function in_es6(left, right) {
        if (((right instanceof Array) || ((typeof right) === "string"))) {
            return (right.indexOf(left) > (- 1));
        } else {
            if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                return right.has(left);
            } else {
                return (left in right);
            }
        }
    }
    container["in_es6"] = in_es6;
    return container;
}
_pj = {};
_pj_snippets(_pj);
function bfs(graf, mulai, tujuan) {
    var isi, jalur, jalur_baru, panjang_tumpukan, queue, state, visited;
    queue = [[mulai]];
    visited = [];
    var path=[];
    while (queue) {
        jalur = queue.pop(0);
        if (!jalur || !jalur.length) { return; }
        state = jalur.slice((- 1))[0];
        path=jalur[1];
        if ((state == tujuan)) {
            return jalur;
        } else {
            if ((! _pj.in_es6(state, visited))) {
                for (var cabang, _pj_c = 0, _pj_a = graf[state], _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                    cabang = _pj_a[_pj_c];
                    jalur_baru = [jalur];
                    jalur_baru.push(cabang);
                    queue.push(jalur_baru);
                }
                visited.push(state);
            }
        }
        isi = queue.length;
        if ((isi === 0)) {
            console.log("Tidak ditemukan");
        }
    }
}

function flatten (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

async function reqBFS(req,res) {
    var petas = req.body.peta;
    var start = (req.body.start);
    var destination = (req.body.destination);
    let payload = {
        success: true,
        message: 'Berhasil menghapus data Anggota.',
    };
    petas=JSON.parse(petas);

    var nes = (bfs(petas,start, destination));
    res.json(flatten(nes));
}

module.exports= {
    reqBFS
}