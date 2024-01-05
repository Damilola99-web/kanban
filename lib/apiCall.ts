import { db } from '@/firebase';

import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	where,
} from 'firebase/firestore';

export const createBoard = async (
	name: string = '',
	columns: string[] = ['todo'],
	userId: string
) => {
	try {
		const docRef = await addDoc(collection(db, 'Boards'), {
			name,
			userId,
			columns,
			tasks: [],
		});

		return docRef.id;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const getUserBoards = async (userId: string) => {
	return new Promise(async (resolve, reject) => {
		try {
			const querySnapshot = await getDocs(
				query(collection(db, 'Boards'), where('userId', '==', userId))
			);

			const data = querySnapshot.docs.map((doc) => {
				return { ...doc.data(), id: doc.id };
			  });

			resolve(data);

			return data;
		} catch (error) {
			reject(error);
		}
	});
};

export const getBoard = async (id: string) => {
	try {
		const docRef = doc(db, 'Boards', id);
		const docSnap = await getDoc(docRef);
		return { ...docSnap.data(), id: docSnap.id };
	} catch (error) {
		console.log(error);
		throw error;
	}
};
