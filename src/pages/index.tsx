//SSG
import { GetStaticProps } from 'next';

type Episode = {
	id: string;
	title: string;
	members: string;
}
type HomeProps = {
	episodes: Episode[];
	// episodes: Array<Episode> outra forma de fazer

}

export default function Home(props: HomeProps) {
	return (
		<div>
			<h1>index</h1>
			<p>{JSON.stringify(props.episodes)}</p>
		</div>
	)
}

export const getStaticProps: GetStaticProps  = async () => {
	const response = await fetch('http://localhost:3333/episodes?_limit=12&_sort=published_at&_order=desc')
	const data = await response.json()

	return {
		props: {
			episodes: data,
		},
		revalidate: 60 * 60 * 6,
	}
}