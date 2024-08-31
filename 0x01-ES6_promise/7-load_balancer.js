/**
 * Returns the value of the promise that resolves first.
 * @param {Promise} chinaDownload - Promise representing the download from China.
 * @param {Promise} USDownload - Promise representing the download from the US.
 * @returns {Promise} A promise that resolves with the value of the first resolved promise.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
