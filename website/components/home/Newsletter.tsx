"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission handled by action
  };

  return (
    <section className="py-24 bg-[#f7f7f7]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Get Involved & Make a Difference
          </h2>
          <p className="text-[#6b6b6b] mb-10">
            Together, let&apos;s create a future where everyone has a chance to succeed.
          </p>

          <form
            action="https://sendlane.com/form-api/submission/eyJkb21haW4iOiJzaW5nYWwiLCJmb3JtX2lkIjoiMDA2MDVlY2QtNWU1Zi00YzBmLTk2N2ItZmE2ZGExZDE0YjdkIn0="
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <Input
              type="text"
              name="1"
              placeholder="First name"
              value={firstName}
              onChange={handleFirstNameChange}
              className="bg-white border-[#e6e6e6] text-black placeholder:text-[#acacac] h-12 rounded-full px-6"
            />
            <Input
              type="email"
              name="3"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
              required
              className="bg-white border-[#e6e6e6] text-black placeholder:text-[#acacac] h-12 rounded-full px-6"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-[#f8d264] hover:bg-[#f8b864] text-black font-semibold px-8 h-12 rounded-full"
            >
              <Send className="mr-2 h-4 w-4" />
              Join Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
