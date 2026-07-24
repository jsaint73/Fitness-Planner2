export default function Hero() {
  return (
    <>
      <h5>Complete your workout in order to get the best results.</h5>
      <ol className="benefits-list">
        <li>Improve your cardiovascular health</li>
        <li>Increase your muscle strength</li>
        <li>Enhance your flexibility</li>
        <li>Burn off the Stubborn Belly Fat</li>
      </ol>

      <h3>Rules:</h3>
      <p>Before starting any exercise program, <b>it is important to consult with a healthcare professional, especially if you have any pre-existing medical conditions or injuries.</b> Always warm up before exercising and cool down afterward. Stay hydrated and listen to your body.</p>
      <ul className="rules-list">
                <div className="rule-item">
                    <p><b>Rest</b></p>
                    <p>Ensure that you are taking rest days where necessary</p>
                </div>
                <div className="rule-item">
                    <p><b>Reps</b></p>
                    <p>Every rep is a pause rep following a <abbr title="2 seconds down - 2 seconds pause - 2 seconds up">2 - 2 - 2 tempo</abbr></p>
                </div>
                <div className="rule-item">
                    <p><b>Weight*</b></p>
                    <p>Select the maximum weight that allows you to complete the set with good form</p>
                </div>
            </ul>
            <small>*Weight is optional for some exercises*</small>
            <small>*always make sure to do warm-up exercises and stretching before each workout*</small>
            <h3>The Training plan:</h3>
            <p>This training plan uses a structure know as the <b>Bro Split</b>, and follows this rotation ⬇️</p>
            <p><b><i>Push &rarr; Pull &rarr; Legs &rarr; Repeat</i></b></p>
            <p>Complete each exercise for 3 sets of 10-15 reps.Also make sure to lift until failure</p>
    </>
  );
}
