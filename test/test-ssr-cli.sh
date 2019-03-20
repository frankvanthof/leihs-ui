#!/bin/sh -exu

TMPFILE_1=`mktemp -t test-ssr.XXXXX`
TMPFILE_2=`mktemp -t test-ssr.XXXXX`

echo "[1]"
# run it by piping to node:
cat dist/leihs-ssr.js | node - render 'DebugProps' '{"hello": "world", "number": 1}' | tee $TMPFILE_1

echo ""; echo ""
echo "[2]"
# run it directly (same file as above but with hashbang for node)
./dist/leihs-ssr render 'DebugProps' '{"hello": "world", "number": 1}' | tee $TMPFILE_2

echo ""; echo ""

EXPECTED_OUTPUT=$(cat <<'END_HEREDOC'
<div data-react-component='DebugProps' data-react-props='%7B%22hello%22%3A%22world%22%2C%22number%22%3A1%7D'><div class="card m-3 p-4" data-reactroot=""><h1 class="h3"><mark>DEBUG <code>props</code></mark></h1><pre><mark>{
  &quot;hello&quot;: &quot;world&quot;,
  &quot;number&quot;: 1
}</mark></pre></div></div>
END_HEREDOC
)

# check it
test "$(cat $TMPFILE_1)" = "$EXPECTED_OUTPUT" || { echo "FAIL 1"; exit 1 ;}
test "$(cat $TMPFILE_2)" = "$EXPECTED_OUTPUT" || { echo "FAIL 2"; exit 1 ;}
echo "OK"
