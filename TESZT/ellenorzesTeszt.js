QUnit.module('TicTacToe-row', function () {
    QUnit.test('row függvény létezik-e', function (assert) {
        assert.ok(row, "létezik a row függvény");
    });
    QUnit.test('A row függvény-e', function (assert) {
        assert.ok(typeof row === "function", "a row függvény");
    });
    QUnit.test('tömb üres', function (assert) {
        tomb = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
        assert.equal(row(), false);
    });
    QUnit.test('X nyert', function (assert) {
        tomb = ["X", "X", "X", "-", "-", "-", "-", "-", "-"];
        assert.equal(row(), true);
    });
    QUnit.test('O nyert', function (assert) {
        tomb = ["O", "O", "O", "-", "-", "-", "-", "-", "-"];
        assert.equal(row(), true);
    });
    QUnit.test('1 X', function (assert) {
        tomb = ["X", "-", "-", "-", "-", "-", "-", "-", "-"];
        assert.equal(row(), false);
    });
    QUnit.test('2 X', function (assert) {
        tomb = ["X", "X", "-", "-", "-", "-", "-", "-", "-"];
        assert.equal(row(), false);
    });
    QUnit.test('1 O', function (assert) {
        tomb = ["O", "-", "-", "-", "-", "-", "-", "-", "-"];
        assert.equal(row(), false);
    });
    QUnit.test('2 O', function (assert) {
        tomb = ["O", "O", "-", "-", "-", "-", "-", "-", "-"];
        assert.equal(row(), false);
    });

});

QUnit.module("TicTacToe-column", function () {
    QUnit.test('column függvény létezik-e', function (assert) {
        assert.ok(column, "létezik a column függvény");
    });
    QUnit.test('A column függvény-e', function (assert) {
        assert.ok(typeof column === "function", "a column függvény");
    });
    QUnit.test('tömb üres', function (assert) {
        tomb = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
        assert.equal(row(), false);
    });
    QUnit.test('X nyert', function (assert) {
        tomb = ["X", "-", "-", "X", "-", "-", "X", "-", "-"];
        assert.equal(row(), true);
    });
    QUnit.test('O nyert', function (assert) {
        tomb = ["O", "-", "-", "O", "-", "-", "O", "-", "-"];
        assert.equal(row(), true);
    });
    QUnit.test('1 X', function (assert) {
        tomb = ["X", "-", "-", "-", "-", "-", "-", "-", "-"];
        assert.equal(row(), false);
    });
    QUnit.test('2 X', function (assert) {
        tomb = ["X", "-", "-", "X", "-", "-", "-", "-", "-"];
        assert.equal(row(), false);
    });
    QUnit.test('1 O', function (assert) {
        tomb = ["O", "-", "-", "-", "-", "-", "-", "-", "-"];
        assert.equal(row(), false);
    });
    QUnit.test('2 O', function (assert) {
        tomb = ["O", "-", "-", "O", "-", "-", "-", "-", "-"];
        assert.equal(row(), false);
    });
});

QUnit.module('TicTacToe-balrolJobbra', function () {
    QUnit.test('balrolJobra függvény létezik-e', function (assert) {
        assert.ok(balrolJobra, "létezik a balrolJobra függvény");
    });
    QUnit.test('A balrolJobra függvény-e', function (assert) {
        assert.ok(typeof balrolJobra === "function", "a balrolJobra függvény");
    });
    QUnit.test('tömb üres', function (assert) {
        tomb = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
        assert.equal(row(), false);
    });
    QUnit.test('X nyert', function (assert) {
        tomb = ["X", "-", "-", "-", "X", "-", "-", "-", "X"];
        assert.equal(row(), true);
    });
    QUnit.test('O nyert', function (assert) {
        tomb = ["O", "-", "-", "-", "O", "-", "-", "-", "O"];
        assert.equal(row(), true);
    });


});

QUnit.module('TicTacToe-jobbrolBalra', function () {
    QUnit.test('jobbrolBalra függvény létezik-e', function (assert) {
        assert.ok(jobbrolBalra, "létezik a jobbrolBalra függvény");
    });
    QUnit.test('A jobbrolBalra függvény-e', function (assert) {
        assert.ok(typeof jobbrolBalra === "function", "a jobbrolBalra függvény");
    });
    QUnit.test('tömb üres', function (assert) {
        tomb = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
        assert.equal(row(), false);
    });
    QUnit.test('X nyert', function (assert) {
        tomb = ["-", "-", "X", "-", "X", "-", "X", "-", "-"];
        assert.equal(row(), true);
    });
    QUnit.test('O nyert', function (assert) {
        tomb = ["-", "-", "O", "-", "O", "-", "O", "-", "-"];
        assert.equal(row(), true);
    });


});

QUnit.module('TicTacToe-cross', function () {
    QUnit.test('cross függvény létezik-e', function (assert) {
        assert.ok(cross, "létezik a cross függvény");
    });
    QUnit.test('A cross függvény-e', function (assert) {
        assert.ok(typeof cross === "function", "a cross függvény");
    });
    QUnit.test('nincs nyertes', function (assert) {
        tomb = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
        assert.equal(row(), false);
    });
    QUnit.test('van nyertes', function (assert) {
        tomb = ["-", "-", "X", "-", "X", "-", "X", "-", "-"];
        assert.equal(row(), true);
    });
   
});

QUnit.module('TicTacToe-ellenörzés', function () {
    QUnit.test('ellenorzes függvény létezik-e', function (assert) {
        assert.ok(ellenorzes, "létezik a ellenorzes függvény");
    });
    QUnit.test('A ellenorzes függvény-e', function (assert) {
        assert.ok(typeof ellenorzes === "function", "a ellenorzes függvény");
    });
    QUnit.test('nincs nyertes', function (assert) {
        tomb = ["X", "-", "-", "-", "-", "-", "-", "-", "-"];
        assert.equal(row(), false);
    });
    QUnit.test('van nyertes', function (assert) {
        tomb = ["X", "X", "X", "O", "O", "-", "-", "-", "-"];
        assert.equal(row(), true);
    });
   
});
