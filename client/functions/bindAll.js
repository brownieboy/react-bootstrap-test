export function bindAll(context, methodNames) {
  methodNames.map(function(methodName) {
    context[methodName] = context[methodName].bind(context);
  });
}