/**
 * Executes a math function and appends results or errors to a queue.
 * @param {Function} mathFunction - The function to be executed.
 * @returns {Array} The queue with the results and guardrail message.
 */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  }

  queue.push('Guardrail was processed');
  return queue;
}
