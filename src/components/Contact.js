function Contact() {
  return (
    <form>
      {/* <!-- Name input --> */}
      <div className="form-outline mb-4">
        <input type="text" id="form4Example1" className="form-control" />
        <label className="form-label">Name</label>
      </div>

      {/* <!-- Email input --> */}
      <div className="form-outline mb-4">
        <input type="email" id="form4Example2" className="form-control" />
        <label className="form-label">Email address</label>
      </div>

      {/* <!-- Message input --> */}
      <div className="form-outline mb-4">
        <textarea
          className="form-control"
          id="form4Example3"
          rows="4"
        ></textarea>
        <label className="form-label">Message</label>
      </div>

      {/* <!-- Submit button --> */}
      <button type="submit" className="btn btn-primary btn-block mb-4">
        Send
      </button>
    </form>
  );
}

export default Contact;
