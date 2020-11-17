import CollectionsData from '../../assets/data/collections-data.json';
const INITIAL_STATE = {
	collections: CollectionsData
};

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		default:
			return state;
	}
};
