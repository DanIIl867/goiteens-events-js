import { EventList } from "./EventList/EventList";
import { Container } from "components/Container/Container";
import { Title } from "components/Title/TItle";
import events from "../upcoming-events.json";

export const App = () => {
	return (
		<Container>
			<Title />
			<EventList events={events} />
		</Container>
	);
};
