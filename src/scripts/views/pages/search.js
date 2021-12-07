import {
  createSearchHospitalBarTemplate,
  createSearchResultTemplate,
} from '../templates/template-creator';

import HospitalizationDetailButtonInitiator from '../../utils/hospitalization-detail-button-initiator';

const Search = {
  async render() {
    document.querySelector('#main-content').setAttribute('class', 'container');
    return `
    <section class="pencarian-rs"></section>
    <section class="hasil-pencarian"></section>
    `;
  },

  async afterRender() {
    const searchHospitalElem = document.querySelector('.pencarian-rs');
    const searchResultElem = document.querySelector('.hasil-pencarian');

    searchHospitalElem.innerHTML = createSearchHospitalBarTemplate();
    searchResultElem.innerHTML = createSearchResultTemplate();

    HospitalizationDetailButtonInitiator.init({
      // hanya satu card dulu (card paling atas)
      buttonContainer: document.querySelector('.card-kamar').firstElementChild,
    });
  },
};

export default Search;