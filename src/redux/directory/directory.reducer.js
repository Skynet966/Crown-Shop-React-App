import SectionsData from '../../assets/data/sections-data.json';

const INITIAL_STATE = {
	sections: SectionsData
};

export default (state = INITIAL_STATE, { type }) => {
	switch (type) {
		default:
			return state;
	}
};
