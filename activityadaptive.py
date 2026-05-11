from models import Activity, InitialActivity

#How many times an activity is reported as 8 or avoce before increasing difficulty
THRESHOLD = 6  

#How much to increase difficulty      
LEARNING_RATE = 1   

def update_activity_difficulty(user_id):


    #Fetch users initial activity table
    difficulty = InitialActivity.query.filter_by(user_id=user_id).first()
    if not difficulty:
        return

    #Count how many times activity was 8 or above
    counts = {
        "shower": Activity.query.filter_by(user_id=user_id).filter(Activity.shower >= 8).count(),
        "cooking": Activity.query.filter_by(user_id=user_id).filter(Activity.cooking >= 8).count(),
        "laundry": Activity.query.filter_by(user_id=user_id).filter(Activity.laundry >= 8).count(),
        "vacuuming": Activity.query.filter_by(user_id=user_id).filter(Activity.vacuuming >= 8).count(),
        "cleaning": Activity.query.filter_by(user_id=user_id).filter(Activity.cleaning >= 8).count(),
        "groceries": Activity.query.filter_by(user_id=user_id).filter(Activity.groceries >= 8).count(),
        "walking": Activity.query.filter_by(user_id=user_id).filter(Activity.walking >= 8).count(),
        "driving": Activity.query.filter_by(user_id=user_id).filter(Activity.driving >= 8).count(),
        "exercise": Activity.query.filter_by(user_id=user_id).filter(Activity.exercise >= 8).count(),
        "studying": Activity.query.filter_by(user_id=user_id).filter(Activity.studying >= 8).count(),
        "socialising": Activity.query.filter_by(user_id=user_id).filter(Activity.socialising >= 8).count(),
        "outing": Activity.query.filter_by(user_id=user_id).filter(Activity.outing >= 8).count(),
    }

    #Update activity difficulty
    for field, count in counts.items():
        if count > THRESHOLD:
            current = getattr(difficulty, field)
            new_value = min(current + LEARNING_RATE, 10)
            setattr(difficulty, field, new_value)

    #Save to table
    from app import db
    db.session.commit()
