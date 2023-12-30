import { ListContainer } from "./Container.styled"

export const Container = ({ children }) => {
	return (
		<div>
			<ListContainer>
				{children}
			</ListContainer>
		</div>
	)
}