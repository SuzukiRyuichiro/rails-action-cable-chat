import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@rails/actioncable"

// Connects to data-controller="chatroom-subscription"
export default class extends Controller {
	static targets = ["messages"]
	static values = { chatroomId: Number }

	connect() {
		this.channel = createConsumer().subscriptions.create(
			{ channel: "ChatroomChannel", id: this.chatroomIdValue },
			{
				received: (data) => this.#insertMessageAndScrollDown(data),
			}
		)
	}

	disconnect() {
		this.channel.unsubscribe()
	}

	resetForm(event) {
		// reset the entire form
		event.target.reset()
	}

	#insertMessageAndScrollDown(data) {
		this.messagesTarget.insertAdjacentHTML("beforeend", data)
		this.messagesTarget.scrollTo(0, this.messagesTarget.scrollHeight)
		// reset the form
	}
}
