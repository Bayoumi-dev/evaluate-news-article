const ErrorMessage = (error) => `<span>${error}</span>`;
const NoContent = (msg) => `<div class="no-content">${msg}.</div>`;
const Loading = `
  <div class="loading">
    <span></span><span></span><span></span>
 </div>
`;
const AnalysisComponent = (data) => `
  <table>
    <tr><th>Analysis Results</th></tr>
    <tr><td>Model</td><td>${data.model}</td></tr>
    <tr><td>Agreement</td><td>${data.agreement}</td></tr>
    <tr><td>Subjectivity</td><td>${data.subjectivity}</td></tr>
    <tr><td>Confidence</td> <td>${data.confidence}%</td></tr>
    <tr><td>Irony</td><td>${data.irony}</td</tr>
    <tr><td>Score Tag</td><td>${data.score_tag}</td></tr>
 </table>
`;

export { ErrorMessage, NoContent, Loading, AnalysisComponent };
