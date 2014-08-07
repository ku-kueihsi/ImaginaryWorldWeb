python2 third_party/closure-library/closure/bin/build/closurebuilder.py \
  --root=third_party/closure-library/ \
  --root=test_project/ \
  --namespace="testGl.start"\
  --output_mode=script \
  --compiler_jar=closure-compiler.jar \
  > compiled/test_gl_debug.js

# python2 third_party/closure-library/closure/bin/build/closurebuilder.py \
#   --root=third_party/closure-library/ \
#   --root=test_project/ \
#   --namespace="testGl.start"\
#   --output_mode=compiled \
#   --compiler_jar=closure-compiler.jar \
#   > compiled/test_gl_compiled.js
