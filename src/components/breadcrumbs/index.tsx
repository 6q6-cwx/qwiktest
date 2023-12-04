import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import './index.css'
export default component$<{ items: { name: string; slug: string; id: string }[] }>(({ items }) => {
	return (
		<nav>
			<ul class="nav">
				<li class="navli">
					<div>
						<Link href="/" >
							<span>Home</span>
                            <span style={{marginLeft:10}}>/</span>
						</Link>
					</div>
				</li>
				{items
					.map((item) => (
						<li key={item.name} style={{marginLeft: 10}} class="navli">
							<div>
								<Link
									href={`/collections/${item.slug}`}
								>
									{item.name}
								</Link>
							</div>
						</li>
				))}
			</ul>
		</nav>
	);
});
