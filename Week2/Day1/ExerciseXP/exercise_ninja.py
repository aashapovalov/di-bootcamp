class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        print(f"Phone number {self.phone_number} called {other_phone.phone_number}")
        self.call_history.append(f"Phone number {self.phone_number} called {other_phone.phone_number}")
        other_phone.call_history.append(f"Phone number {self.phone_number} called {other_phone.phone_number}")

    def show_call_history(self):
        print("Phone call history:")
        for item in self.call_history:
                print(item)

    def send_message(self, content, other_phone):
        print(f"Phone number {self.phone_number} sent {other_phone.phone_number} a message '{content}'")
        self.messages.append({"to": other_phone.phone_number, "from": self.phone_number, "message": content})
        other_phone.messages.append({"to": other_phone.phone_number, "from": self.phone_number, "message": content})

    def show_outgoing_messages(self):
        for item in self.messages:
            if item["from"] == self.phone_number:
                print(item)

    def show_incoming_messages(self):
        for item in self.messages:
            if item["to"] == self.phone_number:
                print(item)

    def show_messages_from(self, other_phone):
        for item in self.messages:
            if item["from"] == other_phone.phone_number:
                print(item)


phone1 = Phone(123456)
phone2 = Phone(654321)
phone3 = Phone(333333)

phone1.call(phone2)
phone2.call(phone1)
phone3.call(phone1)
phone1.send_message("Hi p2!", phone2)
phone1.send_message("Ping from p1", phone3)
phone2.send_message("Reply to p1", phone1)
phone3.send_message("Hello p2, it's p3", phone2)
phone2.send_message("Hey p3!", phone3)

print("\n=== Call histories ===")
print("phone1:")
phone1.show_call_history()
print("phone2:")
phone2.show_call_history()
print("phone3:")
phone3.show_call_history()

# --- Show outgoing / incoming / from ---
print("\n=== phone1 outgoing messages ===")
phone1.show_outgoing_messages()

print("\n=== phone1 incoming messages ===")
phone1.show_incoming_messages()

print("\n=== phone2 incoming messages ===")
phone2.show_incoming_messages()

print("\n=== phone3 messages from phone2 ===")
phone3.show_messages_from(phone2)
